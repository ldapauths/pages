"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[986],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>s});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=p(n),c=a,s=y["".concat(u,".").concat(c)]||y[c]||d[c]||l;return n?r.createElement(s,o(o({ref:t},g),{},{components:n})):r.createElement(s,o({ref:t},g))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const l={sidebar_position:1},o="OAuth2.0\u534f\u8bae",i={unversionedId:"protocols/oauth2",id:"protocols/oauth2",title:"OAuth2.0\u534f\u8bae",description:"OAuth\uff08Open Authorization\uff0c\u5f00\u653e\u6388\u6743\uff09\u662f\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\u7684\u6388\u6743\u534f\u8bae\uff0c\u5141\u8bb8\u7528\u6237\u6388\u6743\u7b2c\u4e09\u65b9\u5e94\u7528\u8bbf\u95ee\u4ed6\u4eec\u5b58\u50a8\u5728\u8d44\u6e90\u670d\u52a1\u4e0a\u53d7\u4fdd\u62a4\u7684\u4fe1\u606f\uff0c\u800c\u4e0d\u9700\u8981\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u63d0\u4f9b\u7ed9\u7b2c\u4e09\u65b9\u5e94\u7528\uff0c\u89e3\u8026\u4e86\u8ba4\u8bc1\u548c\u6388\u6743\u3002",source:"@site/docs/protocols/oauth2.md",sourceDirName:"protocols",slug:"/protocols/oauth2",permalink:"/docs/protocols/oauth2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JWT\u534f\u8bae",permalink:"/docs/protocols/jwt"},next:{title:"SAML\u534f\u8bae",permalink:"/docs/protocols/saml"}},u={},p=[{value:"1.1 /auth/oauth/v20/authorize\uff08GET\uff09",id:"11-authoauthv20authorizeget",level:2},{value:"1.2 /auth/oauth/v20/token\uff08POST\uff09",id:"12-authoauthv20tokenpost",level:2},{value:"1.2.1 id_token\u89e3\u6790\u548c\u9a8c\u7b7e\u8fc7\u7a0b",id:"121-id_token\u89e3\u6790\u548c\u9a8c\u7b7e\u8fc7\u7a0b",level:3},{value:"1.3 /auth/oauth/v20/me\uff08POST\uff09",id:"13-authoauthv20mepost",level:2},{value:"1.4 \u6dfb\u52a0\u5e94\u7528",id:"14-\u6dfb\u52a0\u5e94\u7528",level:2},{value:"1.5 \u8868\u5355\u53c2\u6570\u8bf4\u660e",id:"15-\u8868\u5355\u53c2\u6570\u8bf4\u660e",level:2}],g={toc:p},y="wrapper";function d(e){let{components:t,...l}=e;return(0,a.yg)(y,(0,r.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"oauth20\u534f\u8bae"},"OAuth2.0\u534f\u8bae"),(0,a.yg)("p",null,"OAuth\uff08Open Authorization\uff0c\u5f00\u653e\u6388\u6743\uff09\u662f\u4e00\u4e2a\u5f00\u653e\u6807\u51c6\u7684\u6388\u6743\u534f\u8bae\uff0c\u5141\u8bb8\u7528\u6237\u6388\u6743\u7b2c\u4e09\u65b9\u5e94\u7528\u8bbf\u95ee\u4ed6\u4eec\u5b58\u50a8\u5728\u8d44\u6e90\u670d\u52a1\u4e0a\u53d7\u4fdd\u62a4\u7684\u4fe1\u606f\uff0c\u800c\u4e0d\u9700\u8981\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u63d0\u4f9b\u7ed9\u7b2c\u4e09\u65b9\u5e94\u7528\uff0c\u89e3\u8026\u4e86\u8ba4\u8bc1\u548c\u6388\u6743\u3002\n\u200b\u200bOAuth\u4f5c\u4e3a\u4e00\u79cd\u56fd\u9645\u6807\u51c6\uff0c\u76ee\u524d\u4f20\u64ad\u5e7f\u6cdb\u5e76\u88ab\u6301\u7eed\u91c7\u7528\uff0c\u5e76\u5728\u534f\u8bae\u89c4\u8303\u3010",(0,a.yg)("a",{href:"http://www.rfcreader.com/#rfc6749_line368"},"RFC 6749"),"\u3011\u8be6\u7ec6\u5b9a\u4e49OAuth2.0\u7684\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,a.yg)("p",null,"OAuth 2.0 \u89c4\u5b9a\u4e86\u56db\u79cd\u83b7\u5f97\u4ee4\u724c\u7684\u6d41\u7a0b"),(0,a.yg)("p",null,"\u6388\u6743\u7801\u6a21\u5f0f\uff08authorization_code\uff09"),(0,a.yg)("p",null,"\u7b80\u5316\u6a21\u5f0f\uff08implicit\uff09"),(0,a.yg)("p",null,"\u5bc6\u7801\u6a21\u5f0f\uff08password\uff09"),(0,a.yg)("p",null,"\u5ba2\u6237\u7aef\u6a21\u5f0f\uff08client_credentials\uff09"),"\u53ef\u4ee5\u9009\u62e9\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u6700\u9002\u5408\u7684\u4e00\u79cd\uff0c\u5411\u7b2c\u4e09\u65b9\u5e94\u7528\u9881\u53d1\u4ee4\u724c\u3002",(0,a.yg)("p",null,"\u6d41\u7a0b\u56fe\n",(0,a.yg)("img",{src:n(4044).A,width:"766",height:"411"})),(0,a.yg)("p",null,"\uff08A\uff09\u7528\u6237\u6253\u5f00\u5ba2\u6237\u7aef\u4ee5\u540e\uff0c\u5ba2\u6237\u7aef\u8981\u6c42\u7528\u6237\u7ed9\u4e88\u6388\u6743"),(0,a.yg)("p",null,"\uff08B\uff09\u7528\u6237\u540c\u610f\u7ed9\u4e88\u5ba2\u6237\u7aef\u6388\u6743"),(0,a.yg)("p",null,"\uff08C\uff09\u5ba2\u6237\u7aef\u4f7f\u7528\u4e0a\u4e00\u6b65\u83b7\u5f97\u7684\u6388\u6743\uff0c\u5411\u8ba4\u8bc1\u670d\u52a1\u5668\u7533\u8bf7\u4ee4\u724c"),(0,a.yg)("p",null,"\uff08D\uff09\u8ba4\u8bc1\u670d\u52a1\u5668\u5bf9\u5ba2\u6237\u7aef\u8fdb\u884c\u8ba4\u8bc1\u4ee5\u540e\uff0c\u786e\u8ba4\u65e0\u8bef\uff0c\u540c\u610f\u53d1\u653e\u4ee4\u724c"),(0,a.yg)("p",null,"\uff08E\uff09\u5ba2\u6237\u7aef\u4f7f\u7528\u4ee4\u724c\uff0c\u5411\u8d44\u6e90\u670d\u52a1\u5668\u7533\u8bf7\u83b7\u53d6\u8d44\u6e90\uff08eg:\u8d44\u6e90\u6307\u7528\u6237\u4fe1\u606f\u7b49\uff09"),(0,a.yg)("p",null,"\uff08F\uff09\u8d44\u6e90\u670d\u52a1\u5668\u786e\u8ba4\u4ee4\u724c\u65e0\u8bef\uff0c\u540c\u610f\u5411\u5ba2\u6237\u7aef\u5f00\u653e\u8d44\u6e90"),(0,a.yg)("h2",{id:"11-authoauthv20authorizeget"},"1.1 /auth/oauth/v20/authorize\uff08GET\uff09"),(0,a.yg)("p",null,"\u8be5\u6b65\u9aa4\u4e3b\u8981\u9a8c\u8bc1client_id,response_type,redirect_uri\u76f8\u5173\u53c2\u6570\u4ee5\u53ca\u7528\u6237\u662f\u5426\u5177\u5907\u5e94\u7528\u8bbf\u95ee\u6743\u9650\u7b49\u52a8\u4f5c\uff0c\u9a8c\u8bc1\u6210\u529f\u540e\u91cd\u5b9a\u5411\u5230\u56de\u8c03\u5730\u5740\u5e76\u643a\u5e26code"),(0,a.yg)("p",null,"\u793a\u4f8b\u5730\u5740"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"#\u53d1\u8d77\u5730\u5740\u793a\u4f8b\nhttp://127.0.0.1/auth/oauth/v20/authorize?\nclient_id=MTY5NzU0MDA2OTA3MTUyMzg1MQ&response_type=code&redirect_uri=http://127.0.0.1/oauth\n#\u56de\u8c03\u5730\u5740\u793a\u4f8b\nhttp://127.0.0.1/oauth?code=xxxxxxxx&state=test\n")),(0,a.yg)("h2",{id:"12-authoauthv20tokenpost"},"1.2 /auth/oauth/v20/token\uff08POST\uff09"),(0,a.yg)("p",null,"\u8be5\u6b65\u9aa4\u4e3b\u8981\u9a8c\u8bc1client_id,code,client_secret\u76f8\u5173\u53c2\u6570\uff0c\u9a8c\u8bc1\u6210\u529f\u540e\u9881\u53d1access_token"),(0,a.yg)("p",null,"POST \u53d1\u8d77\u8bf7\u6c42\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"http://127.0.0.1/auth/oauth/v20/token?\nclient_id=MTY5NzU0MDA2OTA3MTUyMzg1MQ\n&grant_type=authorization_code\n&redirect_uri=http://127.0.0.1/oauth\n&client_secret=D2aE584A6A08115Fd4201621983fC0C1&code=fb143a22-7069-4971-955f-f7106ab4bbc1\n")),(0,a.yg)("p",null,"\u6210\u529f\u54cd\u5e94\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "access_token": "xxxxxxx",\n    "refresh_token": "xxxxxxx",\n    "id_token": "xxxxxxx",\n    "expires_in": 1800\n}\n')),(0,a.yg)("p",null,"\u5931\u8d25\u54cd\u5e94\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "error_description": "MTcwMDE3MTA4NDYxMzU0MTg5MA non-existent",\n    "error": 400\n}\n')),(0,a.yg)("h3",{id:"121-id_token\u89e3\u6790\u548c\u9a8c\u7b7e\u8fc7\u7a0b"},"1.2.1 id_token\u89e3\u6790\u548c\u9a8c\u7b7e\u8fc7\u7a0b"),(0,a.yg)("p",null,"maven\u4f9d\u8d56"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.nimbusds</groupId>\n    <artifactId>nimbus-jose-jwt</artifactId>\n</dependency>\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'private boolean parseIdToken(String idToken){\n    try {\n        SignedJWT signedJWT = SignedJWT.parse(idToken);\n        log.info("verify begin..");\n        RSASSAVerifier rsaKey = getRSASSAVerifier();\n        if (Objects.nonNull(rsaKey)) {\n            //\u9a8c\u7b7e\u8fc7\u7a0b\n            signedJWT.verify(rsaKey);\n            log.info("verify success ");\n            //\u83b7\u53d6token\u5bf9\u8c61\n            JWTClaimsSet jwtClaim = signedJWT.getJWTClaimsSet();\n            //\u7b7e\u540d\u5bf9\u8c61\n            log.info("idToken Issuer {}", jwtClaim.getIssuer());\n            //\u4e3b\u4f53-\u4e00\u822c\u4e3a\u7528\u6237\u552f\u4e00\u6807\u8bc6\n            log.info("idToken Subject {}", jwtClaim.getSubject());\n            //\u8fc7\u671f\u65f6\u95f4\n            log.info("idToken ExpirationTime {}", jwtClaim.getExpirationTime());\n            return true;\n        }\n    } catch (Exception e){\n        log.error("\u9a8c\u7b7e\u5f02\u5e38",e);\n    }\n    return false;\n}\n\n/**\n * \u8bfb\u53d6RSA\u516c\u94a5\n * @return\n */\nprivate RSASSAVerifier getRSASSAVerifier() {\n    try {\n        File file = ResourceUtils.getFile("classpath:jwk.jwks");\n        JWKSet jwkSet= JWKSet.load(file);\n        //kid\u4e3aIDP\u9881\u53d1\u63d0\u4f9b\n        RSASSAVerifier rsaSSAVerifier = \n            new RSASSAVerifier(((RSAKey) jwkSet.getKeyByKeyId(kid)).toRSAPublicKey());\n        return rsaSSAVerifier;\n    } catch (Exception e) {\n        log.error("\u52a0\u8f7dRSA\u516c\u94a5\u5931\u8d25",e);\n    }\n    return null;\n}\n')),(0,a.yg)("h2",{id:"13-authoauthv20mepost"},"1.3 /auth/oauth/v20/me\uff08POST\uff09"),(0,a.yg)("p",null,"\u8be5\u6b65\u9aa4\u4e3b\u8981\u9a8c\u8bc1access_token\u76f8\u5173\u53c2\u6570\uff0c\u9a8c\u8bc1\u6210\u529f\u540e\u9881\u53d1\u7528\u6237\u5bf9\u8c61"),(0,a.yg)("p",null,"POST \u53d1\u8d77\u8bf7\u6c42\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"http://127.0.0.1/auth/oauth/v20/me?access_token=80e53b34-27ed-4ee6-9772-4868b65add7e\n")),(0,a.yg)("p",null,"\u6210\u529f\u54cd\u5e94\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'\n{\n    "sub": "zhangsan",\n    "username": "xxxxxxx",\n    "mobile": "137xxxxx",\n    "email": "zhangsan@test.com",\n    "name": "\u5f20\u4e09"\n    ....\n}\n')),(0,a.yg)("p",null,"\u5931\u8d25\u54cd\u5e94\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "error_description": "Invalid access token: 0ed259c6-74e7-4965-9621-2a8004761e69",\n    "error": "invalid_token"\n}\n')),(0,a.yg)("h2",{id:"14-\u6dfb\u52a0\u5e94\u7528"},"1.4 \u6dfb\u52a0\u5e94\u7528"),(0,a.yg)("p",null,"\u8fdb\u5165\u5e94\u7528\u7ba1\u7406-\u65b0\u589e\u5e94\u7528\uff0c\u9009\u62e9OAUTH\uff0c\u5982\u4e0b\u56fe\u6240\u793a\n",(0,a.yg)("img",{src:n(5472).A,width:"1920",height:"658"})),(0,a.yg)("h2",{id:"15-\u8868\u5355\u53c2\u6570\u8bf4\u660e"},"1.5 \u8868\u5355\u53c2\u6570\u8bf4\u660e"),(0,a.yg)("p",null,(0,a.yg)("img",{src:n(1328).A,width:"758",height:"927"}),"\n\u53c2\u6570\u8bf4\u660e"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u56fe\u6807"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u56fe\u6807")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7f16\u7801"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u53ea\u80fd\u8f93\u5165\u6570\u5b57\u548c\u5b57\u6bcd\u957f\u5ea6\u4e0d\u8d85\u8fc764\u4f4d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u540d\u79f0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u4e0d\u8d85\u8fc764\u4f4d")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u8bbf\u95ee\u8def\u5f84"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u9ed8\u8ba4\u8bbf\u95ee\u8def\u5f84\uff0c")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u8d26\u53f7\u6620\u5c04\u4e3b\u4f53"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u624b\u673a\u53f7\u7801\uff0c\u6839\u636e\u5e94\u7528\u81ea\u8eab\u9009\u62e9\u8d26\u53f7\u4f53\u7cfb\uff0c\u4f8b\u5982\uff0c\u9009\u62e9\u624b\u673a\u53f7\u7801\uff0c\u5728\u83b7\u53d6\u7528\u6237\u63a5\u53e3\u65f6\uff0csub\u5b57\u6bb5\u5bf9\u5e94\u4e3a\u624b\u673a\u53f7\u7801")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u56de\u8c03\u5730\u5740"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u56de\u8c03\u5730\u5740\uff0c\u8ba4\u8bc1\u6210\u529f\u540e\u4f1a\u5f80\u56de\u8c03\u5730\u5740\u8fdb\u884c\u56de\u8c03\uff0c\u9881\u53d1code\u4ee4\u724c")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u6388\u6743\u6a21\u5f0f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"authorization_code")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u4f5c\u7528\u57df"),(0,a.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u652f\u6301all/read/write/profile")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ACCESS_TOKEN\u6709\u6548\u671f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"ACCESS_TOKEN\u7684\u6709\u6548\u65f6\u957f\uff0c\u9ed8\u8ba41800\uff0c\u5355\u4f4d\u79d2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"REFRESH_TOKEN\u6709\u6548\u671f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"REFRESH_TOKEN\u7684\u6709\u6548\u65f6\u957f\uff0c\u9ed8\u8ba41800\uff0c\u5355\u4f4d\u79d2")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"\u6388\u6743\u7801CODE\u6709\u6548\u671f"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"CODE\u7684\u6709\u6548\u65f6\u957f\uff0c\u9ed8\u8ba41800\uff0c\u5355\u4f4d\u79d2")))))}d.isMDXComponent=!0},5472:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/img_1-b317ed18e9ad08473e05c3ab8441ac0e.png"},4044:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/oauth-b94008e7e1c5d3e4e953987de8531894.png"},1328:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/img-a2bafb38ce363d6811cea0131e1e2770.png"}}]);