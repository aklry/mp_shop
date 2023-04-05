/*
 Navicat Premium Data Transfer

 Source Server         : iwen
 Source Server Type    : MySQL
 Source Server Version : 50560
 Source Host           : 39.97.109.85:3306
 Source Schema         : mpshop

 Target Server Type    : MySQL
 Target Server Version : 50560
 File Encoding         : 65001

 Date: 08/08/2022 15:36:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `descs` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of banner
-- ----------------------------
BEGIN;
INSERT INTO `banner` VALUES (1, 'http://iwenwiki.com:3001/images/banner/1.jpg', '测试');
INSERT INTO `banner` VALUES (2, 'http://iwenwiki.com:3001/images/banner/2.png', '测试');
INSERT INTO `banner` VALUES (3, 'http://iwenwiki.com:3001/images/banner/3.jpg', '测试');
INSERT INTO `banner` VALUES (4, 'http://iwenwiki.com:3001/images/banner/4.jpg', '测试');
COMMIT;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `title` text,
  `image` mediumtext,
  `price` text,
  `currentID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COMMENT='newTable';

-- ----------------------------
-- Records of cart
-- ----------------------------
BEGIN;
INSERT INTO `cart` VALUES (19, '倍思 氮化镓GaN100W充电器套装适用pd20W苹果13/12手机多口Type-C快充头MacBook华为小米笔记本电脑65W插头黑', 'http://iwenwiki.com:3001/images/details/d7.webp', '199', 7);
INSERT INTO `cart` VALUES (20, '爱奇艺 奇遇Dream Pro 8G+128G会员版 4K VR一体机 骁龙XR2 PC串流Steam游戏', 'http://iwenwiki.com:3001/images/details/d13.webp', '2799', 13);
INSERT INTO `cart` VALUES (21, 'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待', 'http://iwenwiki.com:3001/images/details/d4.webp', '21298', 4);
COMMIT;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `tag` text,
  `image` text,
  `cate` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='newTable';

-- ----------------------------
-- Records of category
-- ----------------------------
BEGIN;
INSERT INTO `category` VALUES (1, '空调', 'http://iwenwiki.com:3001/images/category/r1.jpg', '热门推荐');
INSERT INTO `category` VALUES (2, '冰箱', 'http://iwenwiki.com:3001/images/category/r2.jpg', '热门推荐');
INSERT INTO `category` VALUES (3, '电脑', 'http://iwenwiki.com:3001/images/category/r3.png', '热门推荐');
INSERT INTO `category` VALUES (4, '手机', 'http://iwenwiki.com:3001/images/category/r4.png', '热门推荐');
INSERT INTO `category` VALUES (5, '口罩', 'http://iwenwiki.com:3001/images/category/r5.jpg', '热门推荐');
INSERT INTO `category` VALUES (6, '书籍', 'http://iwenwiki.com:3001/images/category/r6.jpg', '手机数码');
INSERT INTO `category` VALUES (7, '小米', 'http://iwenwiki.com:3001/images/category/r7.png', '手机数码');
INSERT INTO `category` VALUES (8, 'Apple', 'http://iwenwiki.com:3001/images/category/r8.jpg', '手机数码');
COMMIT;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `price` text NOT NULL,
  `url` text,
  `tag` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of goods
-- ----------------------------
BEGIN;
INSERT INTO `goods` VALUES (1, '松下（Panasonic）DC-BS1HGK微单相机 数码相机 模块化摄影机 视频 直播多机位 电影', '21298', 'http://iwenwiki.com:3001/images/goods/1.webp', '热门推荐');
INSERT INTO `goods` VALUES (2, '南孚5号充电锂电池4粒套装 1.5V恒压快充 TENAVOLTS 适用游戏手柄/键鼠/话筒/吸奶器/血压计/闪光灯等 AA五号', '159', 'http://iwenwiki.com:3001/images/goods/2.webp', '热门推荐');
INSERT INTO `goods` VALUES (3, '佳能（Canon） 5d4 5D Mark IV全画幅专业级4K高清视频数码单反相机套机 佳能5D4 5D4单机身/拆机身（不含镜头） 官方标配', '15988', 'http://iwenwiki.com:3001/images/goods/3.webp', '热门推荐');
INSERT INTO `goods` VALUES (4, '倍思 氮化镓GaN100W充电器套装适用pd20W苹果13/12手机多口Type-C快充头MacBook华为小米笔记本电脑65W插头黑', '199', 'http://iwenwiki.com:3001/images/goods/4.webp', '手机数码');
INSERT INTO `goods` VALUES (5, '佳能（Canon） 5d4 Mark IV专业级全画幅高级单反摄影像照相机 24-70+70-200+闪光灯+手柄+套餐五', '60499', 'http://iwenwiki.com:3001/images/goods/5.webp', '手机数码');
INSERT INTO `goods` VALUES (6, 'kapaier小提琴弱音器专业消音器减小音静音 提琴配件 小提琴【4/4-3/4-1/2】', '68', 'http://iwenwiki.com:3001/images/goods/6.webp', '手机数码');
INSERT INTO `goods` VALUES (7, '徕纳 适用EOS5D4相机兔笼佳能5D3单反微单相机5d2兔笼配件拓展套件多接口铝合金全包防摔保护框 黑色', '310', 'http://iwenwiki.com:3001/images/goods/7.webp', '手机数码');
INSERT INTO `goods` VALUES (8, 'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待', '4099', 'http://iwenwiki.com:3001/images/goods/8.webp', '手机数码');
INSERT INTO `goods` VALUES (9, 'ROKID Air 若琪智能眼镜 AR眼镜手机电脑投屏眼镜非VR一体机游戏3D大屏显示器虚拟 太空银【支持DP输出的设备专属】', '2999', 'http://iwenwiki.com:3001/images/goods/9.webp', '家用电器');
INSERT INTO `goods` VALUES (10, '倍思 氮化镓GaN三代65W充电器套装适用20W苹果13/12多口PD快充头华为小米macbook笔记本适配插头100W数据线黑', '118', 'http://iwenwiki.com:3001/images/goods/10.webp', '家用电器');
INSERT INTO `goods` VALUES (11, '【次日达】SmallRig斯莫格 佳能5D4兔笼 Canon 5D3相机配件竖拍 2271', '699', 'http://iwenwiki.com:3001/images/goods/11.webp', '家用电器');
INSERT INTO `goods` VALUES (12, '南孚(NANFU)5号电池12粒 五号碱性 聚能环3代 适用玩具血压计血糖仪挂钟键盘遥控器等', '29', 'http://iwenwiki.com:3001/images/goods/12.webp', '家用电器');
INSERT INTO `goods` VALUES (13, 'Pandora潘多拉幽蓝星河琉璃串饰925银DIY礼物 送女友 790015C00 幽蓝星河玻璃 均码', '348', 'http://iwenwiki.com:3001/images/goods/13.webp', '电脑办公');
INSERT INTO `goods` VALUES (14, 'Apple iPhone 13 Pro Max (A2644) 128GB 远峰蓝色 支持移动联通电信5G 双卡双待手机（上海电信）', '8699', 'http://iwenwiki.com:3001/images/goods/14.webp', '电脑办公');
COMMIT;

-- ----------------------------
-- Table structure for goodsdetails
-- ----------------------------
DROP TABLE IF EXISTS `goodsdetails`;
CREATE TABLE `goodsdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `title` text,
  `details` text,
  `price` text,
  `topimage` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='newTable';

-- ----------------------------
-- Records of goodsdetails
-- ----------------------------
BEGIN;
INSERT INTO `goodsdetails` VALUES (1, '松下（Panasonic）DC-BS1HGK微单相机 数码相机 模块化摄影机 视频 直播多机位 电影', 'http://iwenwiki.com:3001/images/details/s1.jpg', '21298', 'http://iwenwiki.com:3001/images/details/d1.webp');
INSERT INTO `goodsdetails` VALUES (2, '南孚5号充电锂电池4粒套装 1.5V恒压快充 TENAVOLTS 适用游戏手柄/键鼠/话筒/吸奶器/血压计/闪光灯等 AA五号', 'http://iwenwiki.com:3001/images/details/s2.jpg', '159', 'http://iwenwiki.com:3001/images/details/d2.webp');
INSERT INTO `goodsdetails` VALUES (3, '佳能（Canon） 5d4 5D Mark IV全画幅专业级4K高清视频数码单反相机套机 佳能5D4 5D4单机身/拆机身（不含镜头） 官方标配', 'http://iwenwiki.com:3001/images/details/s3.webp', '4099', 'http://iwenwiki.com:3001/images/details/d3.webp');
INSERT INTO `goodsdetails` VALUES (4, 'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待', 'http://iwenwiki.com:3001/images/details/s4.webp', '21298', 'http://iwenwiki.com:3001/images/details/d4.webp');
INSERT INTO `goodsdetails` VALUES (5, '徕纳 适用EOS5D4相机兔笼佳能5D3单反微单相机5d2兔笼配件拓展套件多接口铝合金全包防摔保护框 黑色', 'http://iwenwiki.com:3001/images/details/s5.webp', '310', 'http://iwenwiki.com:3001/images/details/d5.webp');
INSERT INTO `goodsdetails` VALUES (6, 'kapaier小提琴弱音器专业消音器减小音静音 提琴配件 小提琴【4/4-3/4-1/2】', 'http://iwenwiki.com:3001/images/details/s6.webp', '68', 'http://iwenwiki.com:3001/images/details/d6.webp');
INSERT INTO `goodsdetails` VALUES (7, '倍思 氮化镓GaN100W充电器套装适用pd20W苹果13/12手机多口Type-C快充头MacBook华为小米笔记本电脑65W插头黑', 'http://iwenwiki.com:3001/images/details/s7.webp', '199', 'http://iwenwiki.com:3001/images/details/d7.webp');
INSERT INTO `goodsdetails` VALUES (8, '佳能（Canon）EOS 5D Mark IV 5D4全画幅单反相机 单机身', 'http://iwenwiki.com:3001/images/details/s8.jpg', '16499', 'http://iwenwiki.com:3001/images/details/d8.webp');
INSERT INTO `goodsdetails` VALUES (9, 'ROKID Air 若琪智能眼镜 AR眼镜手机电脑投屏眼镜非VR一体机游戏3D大屏显示器虚拟 太空银【支持DP输出的设备专属】', 'http://iwenwiki.com:3001/images/details/s9.jpg', '2999', 'http://iwenwiki.com:3001/images/details/d9.webp');
INSERT INTO `goodsdetails` VALUES (10, '【次日达】SmallRig斯莫格 佳能5D4兔笼 Canon 5D3相机配件竖拍 2271', 'http://iwenwiki.com:3001/images/details/s10.webp', '699', 'http://iwenwiki.com:3001/images/details/d10.webp');
INSERT INTO `goodsdetails` VALUES (11, '梦特娇 MONTAGUT 单肩包女真牛皮女士手提包大容量斜挎包包女七夕情人节礼物 送女友 米白色R7612376213', 'http://iwenwiki.com:3001/images/details/s11.jpg', '1318', 'http://iwenwiki.com:3001/images/details/d11.webp');
INSERT INTO `goodsdetails` VALUES (12, '南孚(NANFU)5号充电锂电池20粒 1.5V TENAVOLTS 适用于KTV无线麦克风 AA五号', 'http://iwenwiki.com:3001/images/details/s12.jpg', '550', 'http://iwenwiki.com:3001/images/details/d12.webp');
INSERT INTO `goodsdetails` VALUES (13, '爱奇艺 奇遇Dream Pro 8G+128G会员版 4K VR一体机 骁龙XR2 PC串流Steam游戏', 'http://iwenwiki.com:3001/images/details/s13.jpg', '2799', 'http://iwenwiki.com:3001/images/details/d13.webp');
INSERT INTO `goodsdetails` VALUES (14, 'ROYAL CANIN 皇家猫粮 I27 Indoor27室内成猫猫粮 通用粮 2kg', 'http://iwenwiki.com:3001/images/details/s14.jpg', '120', 'http://iwenwiki.com:3001/images/details/d14.webp');
COMMIT;

-- ----------------------------
-- Table structure for keywords
-- ----------------------------
DROP TABLE IF EXISTS `keywords`;
CREATE TABLE `keywords` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `content` varchar(255) DEFAULT NULL COMMENT 'content',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='newTable';

-- ----------------------------
-- Records of keywords
-- ----------------------------
BEGIN;
INSERT INTO `keywords` VALUES (1, '跑步机');
INSERT INTO `keywords` VALUES (2, '手机');
INSERT INTO `keywords` VALUES (3, '苹果电脑');
INSERT INTO `keywords` VALUES (4, '充电器');
INSERT INTO `keywords` VALUES (5, '乐高');
INSERT INTO `keywords` VALUES (6, '机械手表');
INSERT INTO `keywords` VALUES (7, '机械键盘');
INSERT INTO `keywords` VALUES (8, '平凡的世界');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `openid` text,
  `session_key` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='newTable';

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'QZqCIwdWrk6UG+apAPSV/Q==');
INSERT INTO `user` VALUES (2, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'YPbMi2kwwdXPIyEw68y4zg==');
INSERT INTO `user` VALUES (3, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'dr461UIbREfx6LD80nb0oA==');
INSERT INTO `user` VALUES (4, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'dr461UIbREfx6LD80nb0oA==');
INSERT INTO `user` VALUES (5, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'QKzNWmv7OpMxjKv/57iktQ==');
INSERT INTO `user` VALUES (6, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'UiPj5/Gz54GbaX5Dkbhv3A==');
INSERT INTO `user` VALUES (7, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'IvMMaCBqQcBPpb+HATzsQQ==');
INSERT INTO `user` VALUES (8, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'HhZRMgBY6Vwmu/XuGmrRWQ==');
INSERT INTO `user` VALUES (9, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'vbBeQTCn2QudMLcpBlBjyQ==');
INSERT INTO `user` VALUES (10, 'ou1Gm5Kd_WPyu6G9IWYCV-GoSNiU', 'D70GiJImEhBxs4fo71kyHQ==');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
