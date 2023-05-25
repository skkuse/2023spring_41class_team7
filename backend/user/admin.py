from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserCreationForm as BaseUserCreationForm

from .models import User
# Register your models here.

class UserCreationForm(BaseUserCreationForm):
    class Meta(BaseUserCreationForm.Meta):
        model = User
        fields = BaseUserCreationForm.Meta.fields + ("educator",)


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm

    list_display = ["username", "email", "educator"]
    fieldsets = BaseUserAdmin.fieldsets + ((None, {"fields": ["educator"]}),)
    add_fieldsets = BaseUserAdmin.add_fieldsets + ((None, {"fields": ["educator"]}),)

admin.site.unregister(Group)