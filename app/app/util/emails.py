from post_office import mail
from django.conf import settings
from django.core.management import call_command


def send_luna_emails(user, email_type, code):
    from_email = settings.EMAIL_HOST_USER
    subject = ''
    message = ''
    if email_type == 'activation':
        subject = 'Activate your Luna account'
        message = f"Hi {user.first_name}!\n\nOne more step to activate your account.\n\n" \
            f"Enter the following code on our website and you'll be good to go!\n\n" \
            f"{code}\n\n" \
            f"Enjoy,\n\nThe Luna team"
    elif email_type == 'password':
        subject = 'Reset your Luna account password'
        message = f"Hi {user.first_name}!\n\nYou have requested to reset your Luna account password.\n\n" \
            f"Enter the following code on our website and you'll be good to go!\n\n" \
            f"{code}\n\n" \
            f"Enjoy,\n\nThe Luna team"

    if subject != '' and message != '':
        mail.send(
            user.email,
            from_email,
            subject=subject,
            message=message,
        )

    try:
        call_command('send_queued_mail', processes=1)

    except ImportError:
        print("Failed to dispatch emails")
