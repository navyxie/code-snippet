var v2 = {
    "style":{
        "redBg":{
            "background-color":"red"
        },
        "fontSize20":{
            "font-size":"20px"
        },
        "colorBlue":{
            "color":"blue"
        }
    },
    "component":{
        "loanPage":{
            "analystKey": "资产页",
            "PageTitle":"我的资产"
        },
        "loanPage.header":{
            "analystKey": "资产页头部",
            "style":["redBg"]
        },
        "loanPage.buyBtn":{
            "style":["redBg","fontSize20"]
        }
    },
    "behavior":{
        "login":{
            "loanPage.header":{
                "style":["colorBlue"]
            }
        },
        "tab":{
            "loanPage.buyBtn":{
                "style":["colorBlue","fontSize20"]
            }
        }
    }
}

// v2比v1：结构清晰，松耦合，易扩展

var v1 = {
    "loanPage": {
      "commonState": {
        "component": {
            "header": {
                "css": {
                "background-color": ""
            },
            "icon": {
                "imgUrl":""
            }
          },
          "spanInfo": {
                "css":{
                    "color": ""
                }
            }
        },
        "analystKey": ""
      },
      "loginState": {
        "analystKey": "已登录",
        "component":{
            "css":{
                "color":""
            },
            "analystKey":""
        },
        "yesterdayEarnings": {
            "css":{
                "color":""
            },
            "analystKey":""
        },
        "synsRate":{
            "css":{
                "color":""
            },
            "analystKey":""
        },
        "totalAsset":{
            "css":{
                "color":""
            },
            "analystKey":""
        },
        "purchaseButton":{
            "css":{
                "background-color":"",
                "border-radious":"",
                "color":""
            },
            "analystKey":""
        },
        "aboutButton":{
            "css":{
                "background-color":"",
                "border-radious":"",
                "color":""
            },
            "analystKey":""
        }
      },
      "unlogin_state": {
        "analystKey": "未登录",
        "component":{
            "css":{
                "color":""
            },
            "analystKey":""
        },
        "headerLines":{
            "css":{
                "background-color":"",
                "color":""
            }
        },
        "demadRate":{
            "css":{
                "color":""
            },
            "analystKey":""
        },
        "tenThousandEarnings":{
            "css":{
                "color":""
            }
        },
        "purchaseButton":{
            "css":{
                "background-color":"",
                "border-radious":"",
                "color":""
            },
            "analystKey":""
        },
        "navgationbarLoginButton":{
            "css":{
                "color":""
            }
        }
      }
    }
}