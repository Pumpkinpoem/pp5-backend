from django.db import models
from django.contrib.auth.models import User

def my_view(request):
    queryset = Post.objects.annotate(
        annotated_likes_count=Count('likes')
    )

class Post(models.Model):
    

    image_filter_choices = [
    ('action_adventure', 'Action/Adventure fiction'),
    ('art_photography', 'Art & photography'),
    ('autobiography_memoir', 'Autobiography/Memoir'),
    ('biography', 'Biography'),
    ('childrens_fiction', 'Children’s fiction'),
    ('classic_fiction', 'Classic fiction'),
    ('contemporary_fiction', 'Contemporary fiction'),
    ('essays', 'Essays'),
    ('fantasy', 'Fantasy'),
    ('food_drink', 'Food & drink'),
    ('graphic_novel', 'Graphic novel'),
    ('historical_fiction', 'Historical fiction'),
    ('horror', 'Horror'),
    ('how_to_guides', 'How-To/Guides'),
    ('humanities_social_sciences', 'Humanities & social sciences'),
    ('humor', 'Humor'),
    ('lgbtq', 'LGBTQ+'),
    ('literary_fiction', 'Literary fiction'),
    ('mystery', 'Mystery'),
    ('new_adult', 'New adult'),
    ('parenting', 'Parenting'),
    ('philosophy', 'Philosophy'),
    ('religion_spirituality', 'Religion & spirituality'),
    ('romance', 'Romance'),
    ('satire', 'Satire'),
    ('science_fiction', 'Science fiction'),
    ('science_technology', 'Science & technology'),
    ('self_help', 'Self-help'),
    ('short_story', 'Short story'),
    ('thriller', 'Thriller'),
    ('travel', 'Travel'),
    ('true_crime', 'True crime'),
    ('western', 'Western'),
    ('womens_fiction', 'Women’s fiction'),
    ('young_adult', 'Young adult')
]


    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    comments_count = models.IntegerField(default=0)
    image = models.ImageField(
        upload_to='images/', default='../default_post_penf1s', blank=True
    )

    image_filter =models.CharField(
        max_length=32, choices=image_filter_choices, default='normal'
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'