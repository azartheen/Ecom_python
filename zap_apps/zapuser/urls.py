from django.conf.urls import patterns, url
from zap_apps.zapuser import views

urlpatterns = [
    url(r'^mydetails(/?)$', views.MyDetail.as_view()),    # When app is opened, checks if the user is logged in/sessions/referrals/updates gcm
    url(r'^myinfo(/?)$', views.MyInfo.as_view()),
    url(r'^test(/?)$', views.Test.as_view()),
    url(r'^admire(/?)$', views.Admire.as_view()),
    url(r'^session(/?)$', views.CreateSession.as_view()),
    url(r'^accountnumber(/?)$', views.UserAccountNumber.as_view()),
    url(r'^check_username(/?)$', views.CheckUsername.as_view()),
    url(r'^check_buildnumber(/?)$', views.CheckBuildNumber.as_view()),
    url(r'^check_buildnumber/ios(/?)$', views.CheckBuildNumberIOS.as_view()),
    url(r'^check_buildnumber/ios2(/?)$', views.CheckBuildNumberIOS2.as_view()),
    url(r'^like_product(/?)$', views.LikeUnlike.as_view()),
    url(r'^profile/(?P<pk>[0-9]+)(/?)$', views.ProfileDetails.as_view()),
    url(r'^profile/(?P<pk>[0-9]+)/an(/?)$', views.AnProfileDetails.as_view()),
    url(r'check_email_and_mob(/?)$', views.CheckEmailMobNum.as_view()),
    url(r'add_phone(/?)$', views.AddPhone.as_view()),
    url(r'get_my_email_and_num(/?)$', views.GetEmailNum.as_view()),
    url(r'get_email_and_num(/?)$', views.GetEmailAndNum.as_view()),
    url(r'mysavedcards(/?)$', views.MySavedCards.as_view()),
    url(r'my_loved_products(/?)$', views.MyLovedProducts.as_view()),
    url(r'my_zapcash(/?)$', views.MyZapCash.as_view()),
    url(r'otpverify(/?)$', views.OTPVerify.as_view()),
    url(r'otpverify2(/?)$', views.OTPVerify2.as_view()),
    url(r'mybrandtags(/?)$', views.MyBrandTags.as_view()),
    url(r'mybrands(/?)$', views.MyZapBrands.as_view()),
    url(r'mybrands/ios(/?)$', views.MyZapBrandsIOS.as_view()),
    url(r'mysizes(/?)$', views.MySizes.as_view()),
    url(r'mysales(/?)$', views.MySales.as_view()),
    url(r'myorders(/?)$', views.MyOrders.as_view()),
    url(r'getallcities(/?)$', views.GetCities.as_view()),
    url(r'myzapcash(/?)$', views.GetMyZapCash.as_view()),
    url(r'appvirality_key/?$', views.AppViralityKeyView.as_view()),
    url(r'zapcash/?$', views.ZapCashView.as_view()),
    url(r'website_lead/?$', views.WebsiteLeads.as_view()),
    url(r'branch_app_install_hook/?$', views.BranchAppInstallHook.as_view()),
    url(r'branch_signup_hook/?$', views.BranchSignupHook.as_view()),
    url(r'subscribe/(?P<id>[0-9]*)(/?)?$', views.Subscribe.as_view()),
    # url(r'zapcredit/?$', views.ZapCreditView.as_view()),
]
