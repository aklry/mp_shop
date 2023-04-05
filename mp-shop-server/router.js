const express = require("express");
const router = express.Router();
const SQLConnect = require("./SQLConnect.js");
const url = require("url");
const request = require("request");
const authorization_code = "itbaizhan"
const appid = "wxe4135ba344b525f4"
const secret = "a3e4a228cf68dbd055f63487352b582b"


/**
 * banner接口地址
 */
router.get("/banner", (req, res) => {
    const sql = "select * from banner";
    SQLConnect(sql, [], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: {
                    result: result
                }
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }

    })
})

/**
 * 推荐商品
 */
router.get("/goods", (req, res) => {
    var page = url.parse(req.url, true).query.page || 1;
    const sql = "select * from goods limit 10 offset " + (page - 1) * 10;
    SQLConnect(sql, [page], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: {
                    result: result
                }
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }

    })
})

/**
 * 搜索，模糊查询
 */

router.get("/goods/search", (req, res) => {
    var search = url.parse(req.url, true).query.search;
    const sql = "select * from goods where title like '%" + search + "%'";
    SQLConnect(sql, null, (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }
    })
});

/**
 * search keywords
 */
router.get("/keywords", (req, res) => {
    const sql = "select * from keywords";
    SQLConnect(sql, [], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: {
                    result: result
                }
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }

    })
})

/**
 * goodsdetails
 */
router.get("/goods/details", (req, res) => {
    var id = url.parse(req.url, true).query.id;
    const sql = "select * from goodsdetails where id=?";
    SQLConnect(sql, [id], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }
    })
});

/**
 * 加入购物车
 */

router.get("/cart/add", (req, res) => {
    var title = url.parse(req.url, true).query.title;
    var price = url.parse(req.url, true).query.price;
    var image = url.parse(req.url, true).query.image;
    var currentID = url.parse(req.url, true).query.currentID;
    const sql = "insert into cart values (null,?,?,?,?)";
    SQLConnect(sql, [title, image, price, currentID], (result) => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                success: true,
                msg: "添加成功"
            })
        } else {
            res.status(500).send({
                status: 500,
                msg: "添加失败"
            });
        }
    })
});

/**
 * 购物车
 */
router.get("/cart", (req, res) => {
    const sql = "select * from cart";
    SQLConnect(sql, [], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }
    })
});

/**
 * 删除购物车
 */
router.get("/cart/del", (req, res) => {
    var id = url.parse(req.url, true).query.currentID;
    const sql = "DELETE FROM cart WHERE id=?";
    SQLConnect(sql, [id], (result) => {
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                success: true
            })
        } else {
            res.status(500).send({
                msg: "删除失败"
            });
        }
    })
});

/**
 * 购买商品查询
 */
router.get("/buy", (req, res) => {
    var id = url.parse(req.url, true).query.id;
    const sql = "select * from goods where id=?";
    SQLConnect(sql, [id], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }
    })
});

/**
 * 类别
 */
router.get("/category", (req, res) => {
    var tag = url.parse(req.url, true).query.tag;
    const sql = "select * from category where cate=?";
    SQLConnect(sql, [tag], (result) => {
        if (result.length > 0) {
            res.send({
                status: 200,
                data: result
            });
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            });
        }
    })
});


/**
 * 登录
 */

router.post("/login", (req, res) => {
    const { code } = req.body;
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=${authorization_code}`, (err, response, body) => {
        if (err) console.log(err);
        const data = JSON.parse(body);
        /**
         * 签名校验以及数据加解密涉及用户的会话密钥session_key。 需要保存在服务器
         * openid 判断是否是同一个用户
         * session_key 判断用户是否失效
         * data: {
         *    openid: '**********',
         *    session_key: '********'
         * }
         */
        const sql = "insert into user values (null,?,?)"
        if(data.openid && data.session_key){
            SQLConnect(sql, [data.openid,data.session_key], (result) => {
                if (result.affectedRows > 0) {
                    res.send({
                        status: 200,
                        data: data.session_key,
                        msg: "添加成功"
                    })
                } else {
                    res.status(500).send({
                        status: 500,
                        msg: "添加失败"
                    });
                }
            })
        }else{
            res.send({
                status:500,
                msg:"登录失败"
            })
        }
    })
})


module.exports = router;