from django.shortcuts import render
from .models import Post 
from django.http import JsonResponse
# from django.core import serializers

def post_list_and_create(request):
     qs = Post.objects.all()
     return render(request, 'posts/main.html', {'qs':qs})

def load_post_data_view(request):
    qs = Post.objects.all()
    # data = serializers.serialize('json', qs)
    data = []           # make it dictionary
    for obj in qs:
            item = {        # take information and put them into dictionary
                'id' : obj.id,
                'title' : obj.title,
                'body' : obj.body,
                'author' : obj.author.user.username
            }
            data.append(item)
    return JsonResponse({'data': data})


def hello_world_view(request):
     return JsonResponse({'text' : 'hello world x2'})