#xcx_admin
开发环境src

```
├── src                          
│   ├── api                             所有请求封装
│   ├── assets                          静态资源
│   ├── common                          公用功能模块
│   │   │
│   │   ├── config                      配置信息
│   │   ├── fetch axios                 配置
│   │   ├── port_uri                    请求路径统一管理
│   │   ├── print                       本地打印插件
│   │   ├── storage                     本地缓存配置
│   │   └── tools                       工具(校验等)
│   │
│   ├── commponents                     公用组件
│   │   │
│   │   ├── bottomToolBar               批量删除按钮 分页组件
│   │   ├── eiditor                     富文本编辑器
│   │   ├── leftSlide                   导航菜单列表
│   │   ├── mainContent                 公用头部
│   │   └── panelTitle                	公用页面标题  
│   │   
│   ├── pages                         	页面
│   │   │ 
│   │   ├── bannerManage               	广告管理 分页组件
│   │   │   ├── activity.vue            活动配置(美业/商城/企业)     
│   │   │   └── slideshow.vue         	首页banner配置(弃用)
│   │   │
│   │   ├── dataManage              
│   │   │   ├── discountCoupon.vue      优惠券管理(美业)
│   │   │   ├── evaluate.vue          	评价管理(公用)
│   │   │   ├── hotelOrderList.vue      订单管理(酒店民宿)
│   │   │   ├── proList.vue           	订单管理(美业/商城/企业/餐饮/外卖公用)
│   │   │   ├── videoList.vue           视频管理(企业)
│   │   │   └── vipMember.vue         	会员管理(公用)
│   │   │
│   │   ├── distribution                分销管理(商城)
│   │   │   ├── images                  
│   │   │   │   └── grade.png  
│   │   │   ├── order.vue               分销订单
│   │   │   └── verify.vue    	        分销审核
│   │   │
│   │   ├── error              
│   │   │   └── 404.vue               	404页面
│   │   │
│   │   ├── financialManage             资金账户(餐饮/外卖 且 达达配送)
│   │   │   ├── fundsList.vue           对账列表
│   │   │   ├── fundsListCon.vue        
│   │   │   ├── pay.vue                 微信支付页面
│   │   │   └── userFunds.vue           用户资金
│   │   │
│   │   ├── goodsManage                 商品管理
│   │   │   ├── foodClass.vue         	商品分类(外卖)
│   │   │   ├── foodList.vue          	商品列表(外卖)
│   │   │   ├── goodsClass.vue        	商品分类(商城/企业)
│   │   │   ├── goodsList.vue         	商品列表(商城/企业)
│   │   │   ├── merchantErvices.vue   	产品服务(美业)
│   │   │   ├── packages.vue          	套餐 （餐饮）
│   │   │   ├── roomList.vue          	房型列表 （酒店民宿）
│   │   │   └── technicianList.vue    	技师管理(美业)
│   │   │
│   │   ├── groupBuying                 团购(商城)
│   │   │   ├── goodsList               团购商品
│   │   │   │   ├── form.vue           
│   │   │   │   ├── index.vue           
│   │   │   │   └── table.vue         
│   │   │   │  
│   │   │   ├── orderList               订单详情
│   │   │   │   ├── detail.vue           
│   │   │   │   └── index.vue     
│   │   │   │ 
│   │   │   └── goodsClass.vue          团购分类
│   │   │
│   │   ├── gzhHomePage                 公众号商城
│   │   │   ├── firstPage.vue           公众号首页设置
│   │   │   ├── officialaccountInfo.vue 基本信息
│   │   │   ├── publicUrl.vue           链接
│   │   │   └── storeAddress.vue        门店地址
│   │   │
│   │   ├── homePage                    首页
│   │   │   ├── article              
│   │   │   │   ├── index.vue           文章模板(企业)
│   │   │   │   └── form.vue            编辑表单
│   │   │   │
│   │   │   ├── freightage              
│   │   │   │   ├── index.vue           运费模板(商城/企业)
│   │   │   │   └── form.vue            编辑表单
│   │   │   │
│   │   │   ├── cateringMerchant.vue  	商家信息配置 (外卖)
│   │   │   ├── cateringMerchant2.vue 	商家信息配置（餐饮）
│   │   │   ├── lodgeMerchant.vue       商家信息配置（酒店民宿）
│   │   │   ├── shopDiscription.vue   	商家信息配置(美业/商城/企业公用)
│   │   │   └── wmdeliveryset.vue       配送设置(外卖)
│   │   │
│   │   ├── marketing                   市场营销(商城)
│   │   │   ├── coupon.vue              优惠券
│   │   │   └── redPacket.vue           红包
│   │   │
│   │   ├── minProgram                  小程序
│   │   │   ├── moduleManage.vue        模块设置
│   │   │   └── templateManage.vue      模版设置
│   │   │
│   │   ├── orderMessage 
│   │   │   └── spcGoodsDelivery.vue    打印模板
│   │   │
│   │   ├── printSetup 
│   │   │   ├── plantManage.vue         打印设置
│   │   │   └── templateStyle.vue       打印模板
│   │   │   
│   │   ├── user 
│   │   │   ├── auth                    授权前端模版，后端渲染
│   │   │   ├── image                   首页、模版、支付方式图片
│   │   │   ├── appInfo.vue             购买模版、填写app信息、授权             
│   │   │   ├── login.Vue             	登录
│   │   │   ├── payment.vue             二维码支付页面
│   │   │   ├── register.vue            注册
│   │   │   └── resetPwd.vue            重置密码
│   │   │
│   │   ├── wxtemplate 
│   │   │   └── manage.vue              小程序模版管理
│   │   │
│   │   └── App.vue              
│   │   
│   ├── router                        	全局路由配置
│   ├── store                         	VUEX配置
│   ├── app.vue                       	页面主入口
│   ├── index.HTML                    	HTML入口文件
│   └── main.js                       	全局JS入口


1 美业
2 商城
3 外卖
4 餐饮
5 企业
6 酒店
```
