import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

// Helper functions
export const followHelper = (profile, clickedProfile, followId) => {
  if (profile.id === clickedProfile.id) {
    return {
      ...profile,
      following_id: followId,
      followers_count: profile.followers_count + 1,
    };
  }
  return profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
  if (profile.id === clickedProfile.id) {
    return {
      ...profile,
      following_id: null,
      followers_count: profile.followers_count - 1,
    };
  }
  return profile;
};

// Creating contexts
export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

// Custom hooks to use the contexts
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => {
        const updatedPageProfile = {
            ...prevState.pageProfile,
            results: (prevState.pageProfile?.results || []).map((profile) =>
                followHelper(profile, clickedProfile, data.id)
            ),
        };
    
        const updatedPopularProfiles = {
            ...prevState.popularProfiles,
            results: (prevState.popularProfiles?.results || []).map((profile) =>
                followHelper(profile, clickedProfile, data.id)
            ),
        };
    
        return {
            ...prevState,
            pageProfile: updatedPageProfile,
            popularProfiles: updatedPopularProfiles,
        };
    });
    } catch (err) {
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      setProfileData((prevState) => {
        const updatedPageProfile = {
          ...prevState.pageProfile,
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        };

        const updatedPopularProfiles = {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        };

        return {
          ...prevState,
          pageProfile: updatedPageProfile,
          popularProfiles: updatedPopularProfiles,
        };
      });
    } catch (err) {
    }
  };

  useEffect(() => {
    const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(
                "/profiles/?ordering=-followers_count"
            );

            if (!data || !data.results) {
                throw new Error('Invalid data structure');
            }

            setProfileData((prevState) => ({
                ...prevState,
                popularProfiles: {
                    ...data,
                    results: data.results || [],
                },
            }));
        } catch (err) {
        }
    };
    handleMount();
}, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
