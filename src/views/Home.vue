<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" id="mainNav">
        <div class="container navbar-top px-md-0">

            <a class="navbar-toggler nav-link pointer d-md-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </a>

            <a href="/home"><img style="width:116px"></a>


            <div class="d-none d-md-block">
                <div class="d-block collapse navbar-collapse">
                    <ul class=" navbar-nav text-uppercase ml-auto flex-row justify-content-between">
                        <li class="nav-item position-relative">
                            <a class="nav-link pointer" href="notification.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0">
                                    </path>
                                </svg>
                                <span style="visibility: visible"
                                    class="unread-count nav-inform-badge badge badge-pill badge-danger shadow-sm">7</span>
                            </a>

                        </li>
                        <li class="nav-item position-relative">
                            <a class="nav-link pointer" href="inbox.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                    </path>
                                </svg>
                                <span style="visibility: visible"
                                    class="unread-mail nav-inform-badge badge badge-pill badge-danger shadow-sm">1</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <a class="navbar-item js-scroll-trigger d-block d-md-none" href="paid">
                <h2 class="h5 text-white mb-0">升級VIP</h2>
            </a>
        </div>
    </nav>

    <section class="main-mt px-md-0">
        <div class="navbar-md d-none d-md-block mb-3">
            <div class="d-block collapse navbar-collapse w-100">
                <ul class="navbar-nav text-uppercase ml-auto flex-row">
                    <li class="nav-item text-center">
                        <a class="nav-link js-scroll-trigger pointer">
                            全部
                        </a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link js-scroll-trigger pointer">
                            新人
                        </a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link js-scroll-trigger pointer">
                            活躍
                        </a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link js-scroll-trigger pointer">
                            推薦
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>


    <article id="new-regist" class="suggested-members home-section-block mb-0">


        <section class="section-title row justify-content-between align-items-center my-3 d-none d-md-block">
            <div class="col-6 pl-1 pl-md-2">
                <h2 class="h4 ml-1 mb-0">推薦會員</h2>
            </div>
            <div class="col-4 col-sm-3 ml-auto pr-0 mr-1 text-right pointer d-none d-md-block" >看更多
                <i class="fa fa-chevron-right"></i>
            </div>
        </section>
        <section class="mb-3">
            <div class="row">

                <div class="col-6 col-sm-3 px-0">
                    <a class="member-block">
                        <div class="avatar-status">
                            <span class="icon-online"></span>
                        </div>
                        <img class="member-photo" src="../assets/2.jpg">
                        <div class="member-info">
                            <span class="name">小美</span>
                            <span class="other-info">23, 新北</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    </article>

</template>


    <style>
    .main-mt {
        width: 80%;
        max-width: 900px;
        margin: 160px auto 0;
    }
    
    .tip-mask {
        visibility: hidden;
    }
    
    .avatar-icon {
        text-align: center;
        position: absolute;
        right: 4px;
        top: 4px;
        width: 32px;
    }
    
    .icon-vip {
        width: 32px;
    }
    
    .icon-notify {
        width: 24px;
    }
    
    .icon-verify {
        width: 24px;
    }
    
    .avatar-status {
        position: absolute;
        left: 8px;
        top: 4px;
    }
    
    .avatar-status .icon-online {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-color: #27c93f;
        border-radius: 50%;
    }
    
    .navbar-md li {
        padding: 0 10px;
        flex-grow: 1;
    }
    
    .navbar-md a {
        border: 1px solid #ddd;
        border-radius: 4px;
        transition: all .3s;
    }
    
    .navbar-md a:hover {
        background-color: #eee;
    }
    
    .navbar-md a.active {
        background-image: linear-gradient(to left, #e68596 0%, #ebcfcf 100%);
        color: #f8f9fa;
    }
    
    @media (max-width: 767px) {
    
        html,
        body {
            height: 100%;
        }
    
        body {
            overflow-y: hidden;
        }
    
        .main-mt {
            width: 100%;
            height: calc(100% - 56px - 98px - env(safe-area-inset-bottom, 0));
            overflow-y: auto;
            overflow-x: hidden;
            top: 56px;
            position: absolute;
            left: 0;
            right: 0;
            -webkit-overflow-scrolling: touch;
            margin: 0 auto;
        }
    
        footer {
            margin-bottom: 20px;
        }
    
        .fixed-bottom .top-row {
            border-bottom: 1px solid #ddd;
        }
    
        .fixed-bottom .top-row a {
            background-color: #fff;
        }
    
        .fixed-bottom .top-row a.active {
            background-color: #e45e76;
            color: #f8f9fa;
        }
    
        .fixed-bottom .nav-item+.nav-item {
            border-left: 1px solid #ddd;
        }
    
        .tip-mask {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, .5);
            visibility: hidden;
            z-index: 1;
        }
    
        .tip-mask.active {
            visibility: visible;
        }
    
        .tip-mask .tip-wrap {
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
        }
    
        .tip-mask .tip-wrap .title {
            color: #fff;
            font-size: 24px;
            text-align: center;
        }
    
        .tip-mask .tip-wrap img {
            max-width: 375px;
        }
    }
    
    .wave-modal-bg .close {
        position: absolute;
        float: none;
        top: 10px;
        right: 10px;
        z-index: 1;
        opacity: 1;
        cursor: pointer;
    }
    
    .btn-reload {
        border: none;
        padding: 6px 12px;
        background-image: linear-gradient(to left, #e68596 0%, #ebcfcf 100%);
        color: #fff;
        width: 75%;
        border-radius: 50px;
    }
    
    .btn-reload:focus {
        outline: none;
    }
    
    .dropdown-group {
        position: relative;
        display: block;
    }
    
    .btn-dropdown-toggle {
        width: 100%;
        line-height: 34px;
    }
    
    [v-cloak] {
        display: none !important;
    }
    </style>