from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Comment
from posts.models import Post

@receiver(post_save, sender=Comment)
def update_comments_count_on_create(sender, instance, created, **kwargs):
    if created:
        post = instance.post
        post.comments_count = post.comments.count()
        post.save()

@receiver(post_delete, sender=Comment)
def update_comments_count_on_delete(sender, instance, **kwargs):
    post = instance.post
    post.comments_count = post.comments.count()
    post.save()