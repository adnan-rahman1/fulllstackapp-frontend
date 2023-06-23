(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/_app.tsx
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/layout.tsx

const Layout = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: children
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.02d41e64.png","height":122,"width":370,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEV2Tz8NnW4BBAPhH0gAAAAWsHz/ADkQoHK5GDsQs3yCZ2EPtHtANAHsAAAADHRSTlMDV1NdQWoWTklOL0QPvEV0AAAACXBIWXMAAAsSAAALEgHS3X78AAAAH0lEQVR4nGPgZOVmAAMWJiYWJg5mZgZ2RkZGRlYuNgAEdABWPSOhxQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(7915);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/navbar/MobileNav.tsx







const MobileNav = ({ isDrawerOpen, setOpenDrawer })=>{
    const theme = (0,material_.useTheme)();
    const router = (0,router_namespaceObject.useRouter)();
    const activeListItemClass = {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: "#fff"
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.SwipeableDrawer, {
        PaperProps: {
            sx: {
                width: "70%",
                "&.MuiDrawer-paper": {
                    background: theme.palette.background.default
                }
            }
        },
        style: {
            zIndex: 1202
        },
        open: isDrawerOpen,
        onClose: ()=>setOpenDrawer(false),
        onOpen: ()=>setOpenDrawer(true),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                variant: "text",
                component: (link_default()),
                href: "/",
                style: {
                    textAlign: "center",
                    margin: "0 auto",
                    width: "100%",
                    background: "rgba(47, 46, 65, 0.0)"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    height: 40,
                    src: logo,
                    alt: "Full Stack App",
                    style: {
                        marginTop: "16px",
                        marginBottom: "16px"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.List, {
                style: {
                    paddingTop: 0
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ListItemButton, {
                        sx: router.pathname === "/" ? {
                            ...activeListItemClass
                        } : null,
                        component: (link_default()),
                        href: "/",
                        onClick: ()=>setOpenDrawer(false),
                        selected: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.HomeRounded, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemText, {
                                children: "Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ListItemButton, {
                        sx: router.pathname === "/about" ? {
                            ...activeListItemClass
                        } : null,
                        component: (link_default()),
                        href: "/about",
                        onClick: ()=>setOpenDrawer(false),
                        selected: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.PersonRounded, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemText, {
                                children: "About"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ListItemButton, {
                        component: (link_default()),
                        href: "https://dev-28305733.okta.com/login/login.htm",
                        onClick: ()=>setOpenDrawer(false),
                        selected: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.LoginRounded, {})
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(material_.ListItemText, {
                                children: "Sign in"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./src/components/navbar/LaptopNav.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger_default()({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });
    return /*#__PURE__*/ external_react_.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}
const LaptopNav = ()=>{
    const theme = (0,material_.useTheme)();
    const md = (0,material_.useMediaQuery)(theme.breakpoints.down("md"));
    const router = (0,router_namespaceObject.useRouter)();
    const [isDrawerOpen, setOpenDrawer] = external_react_.useState(false);
    const activeListItemClass = {
        color: `${theme.palette.primary.main} !important`
    };
    const NavItemClass = {
        mr: 2,
        ":hover": {
            background: "inherit",
            color: theme.palette.primary.main
        }
    };
    external_react_.useEffect(()=>{
        setOpenDrawer(false);
    }, [
        setOpenDrawer
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(ElevationScroll, {
                children: /*#__PURE__*/ jsx_runtime.jsx(material_.AppBar, {
                    sx: {
                        background: (0,material_.alpha)("#fff", 0.3),
                        backdropFilter: "blur(5px)"
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Container, {
                        sx: {
                            padding: "4px"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Toolbar, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: logo,
                                    alt: "fullstackapp",
                                    width: 124
                                }),
                                md ? /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                                    sx: {
                                        ml: "auto"
                                    },
                                    size: "large",
                                    color: "primary",
                                    onClick: ()=>setOpenDrawer(true),
                                    children: /*#__PURE__*/ jsx_runtime.jsx(icons_material_.MenuRounded, {})
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                            size: "large",
                                            sx: router.pathname === "/" ? {
                                                ...activeListItemClass,
                                                ...NavItemClass
                                            } : {
                                                ...NavItemClass
                                            },
                                            style: {
                                                marginLeft: "auto"
                                            },
                                            component: (link_default()),
                                            href: "/",
                                            variant: "text",
                                            color: "inherit",
                                            children: "Home"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                            size: "large",
                                            sx: router.pathname === "/about" ? {
                                                ...activeListItemClass,
                                                ...NavItemClass
                                            } : {
                                                ...NavItemClass
                                            },
                                            component: (link_default()),
                                            href: "/about",
                                            variant: "text",
                                            color: "inherit",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                            size: "large",
                                            sx: {
                                                height: "38px",
                                                color: "#fafafa",
                                                borderRadius: "30px"
                                            },
                                            component: (link_default()),
                                            href: "https://dev-28305733.okta.com/login/login.htm",
                                            variant: "contained",
                                            color: "primary",
                                            children: "Sign in"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.Toolbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(navbar_MobileNav, {
                isDrawerOpen: isDrawerOpen,
                setOpenDrawer: setOpenDrawer
            })
        ]
    });
};
/* harmony default export */ const navbar_LaptopNav = (LaptopNav);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/components/css/global.css
var global = __webpack_require__(1982);
;// CONCATENATED MODULE: ./src/components/config/Theme.tsx

const customTheme = (0,material_.createTheme)({
    palette: {
        primary: {
            main: "#10ba81"
        },
        secondary: {
            main: "#334155"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableTouchRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: "none"
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableTouchRipple: true
            }
        },
        MuiListItemButton: {
            defaultProps: {
                disableTouchRipple: true
            },
            styleOverrides: {
                root: {
                    backgroundColor: "inherit !important"
                }
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true
            }
        },
        MuiTab: {
            defaultProps: {
                disableTouchRipple: true
            }
        }
    }
});
/* harmony default export */ const Theme = (customTheme);

;// CONCATENATED MODULE: ./src/components/footer.tsx



const Footer = ()=>{
    const theme = (0,material_.useTheme)();
    const isXsScreen = (0,material_.useMediaQuery)(theme.breakpoints.down("sm"));
    const NavItemClass = {
        pl: 2,
        pr: 2,
        color: "#fff",
        ":hover": {
            background: "inherit",
            color: theme.palette.primary.main
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Toolbar, {
        sx: {
            pt: 2,
            pb: 2,
            background: theme.palette.secondary.main
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Container, {
            sx: {
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Box, {
                    sx: {
                        display: "inline-flex",
                        [theme.breakpoints.down("md")]: {
                            margin: "auto"
                        }
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                            size: "large",
                            sx: NavItemClass,
                            component: (link_default()),
                            href: "/",
                            variant: "text",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                            size: "large",
                            sx: NavItemClass,
                            component: (link_default()),
                            href: "/blog",
                            variant: "text",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                            size: "large",
                            sx: NavItemClass,
                            component: (link_default()),
                            href: "/about",
                            variant: "text",
                            children: "About"
                        })
                    ]
                }),
                isXsScreen ? /*#__PURE__*/ jsx_runtime.jsx(material_.Divider, {
                    sx: {
                        width: "320px",
                        margin: "auto",
                        mt: 1,
                        mb: 1,
                        background: theme.palette.primary.light
                    }
                }) : null,
                /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
                    sx: {
                        [theme.breakpoints.down("md")]: {
                            margin: "auto"
                        }
                    },
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                        sx: NavItemClass,
                        size: "large",
                        variant: "text",
                        color: "inherit",
                        children: "Copyright \xa9 2023, All Rights Reserved."
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./src/pages/_app.tsx








const MainApp = ({ Component, pageProps })=>{
    const theme = (0,material_.useTheme)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: Component.displayName
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.ThemeProvider, {
                theme: Theme,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(navbar_LaptopNav, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (MainApp);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 1982:
/***/ (() => {



/***/ }),

/***/ 7915:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812,636,675,664], () => (__webpack_exec__(1797)));
module.exports = __webpack_exports__;

})();