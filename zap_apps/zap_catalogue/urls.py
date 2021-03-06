from django.conf.urls import patterns, url
from zap_apps.zap_catalogue import views

urlpatterns = [
    url(r'^(?P<page>[0-9]*)(/?)$', views.ProductView.as_view()),
    url(r'^(?P<page>[0-9]*)(/?)an(/?)$', views.AnProductView.as_view()),
    url(r'^sellerview/(?P<page>[0-9]*)(/?)$', views.SellerView.as_view()),
    url(r'^singleproduct/(?P<pk>[0-9]+)(/?)$', views.SingleProduct.as_view()),
    url(r'^singleproduct/(?P<pk>[0-9]+)(/?)an(/?)$',
        views.AndroidSingleProduct.as_view()),
    url(r'^crud(/?)$', views.ProductCRUD.as_view()),
    url(r'^comment/(?P<qk>[0-9]*)(/?)$', views.Comment.as_view()),
    url(r'^get_comments(/?)$', views.GetComment.as_view()),
    url(r'^get_likes(/?)$', views.GetLike.as_view()),
    url(r'^zapfashioncalculator(/?)$', views.ZapFashionCalculator.as_view()),
    url(r'^editproduct/(?P<pk>[0-9]+)(/?)$', views.EditProduct.as_view()),
    url(r'^getsizes/(?P<c_type>\w*( \w+)*)(/?)$', views.GETSizes.as_view()),
    url(r'^brand/(?P<brand_name>\w+([\w+|&| \w+])*)/(?P<page>[0-9]*)(/?)$', views.Brand.as_view()),
    url(r'^category/(?P<category_name>\w+([\w+|&| \w+])*)/(?P<page>[0-9]*)(/?)$', views.Category.as_view()),
    url(r'^occasion/(?P<occasion_name>\w+([\w+|&| \w+])*)/(?P<page>[0-9]*)(/?)$', views.Occasion.as_view()),
    url(r'^(?i)style/(?P<style_name>Boho|Trendy|Classic|Chic)/(?P<page>[0-9]*)(/?)$', views.Style.as_view()),
    url(r'^user/search/(?P<q>.+)$', views.UserSearch.as_view()),
    url(r'^schedulepickup/$', views.SchedulePickup.as_view()),
    url(r'^webfilteritems/$', views.WebFilterItems.as_view()),  
    url(r'^sim/(?P<page>[0-9]*)(/?)$', views.SimilarProducts.as_view()),
    url(r'^simpro(/?)$', views.SimilarProductsWithProducts.as_view()),
    url(r'^get_product_sizes(/?)$', views.GetProductSizes.as_view()),
    url(r'^seller_closet/(?P<page>[0-9]*)(/?)$', views.SellerClosetView.as_view()),
    url(r'^browse/(?P<page_type>(brand-new|pre-loved|events))(/?)$', views.Browse.as_view()),
    url(r'^lists/(?P<list_type>(brand|category))(/?)(?P<filter>(shop)*)(/?)(?P<value>(brand-new|pre-loved|brand|designer)*)(/?)$', views.List.as_view()),
    url(r'^follow_brand/(?P<brand_id>\w+)(/?)$', views.FollowBrand.as_view()),
    url(r'^offers/(?P<product_id>\w+)(/?)$', views.GetOffers.as_view()),
    url(r'^header', views.Header.as_view()),
    url(r'^footer', views.Footer.as_view()),
    url(r'^look_items', views.LookItems.as_view()),
    url(r'^looks_for_product/(?P<product>[0-9]+)(/?)', views.ProductLooks.as_view()),
    # url(r'^get_header_products$', views.WebsiteHeaderProducts.as_view())
    # url(r'^filters/(?P<types>\w+)/(?P<brand_name>\w+( \w+)*)(/?)$', views.Brand.as_view()),
]
