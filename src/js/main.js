import '../../src/styles/main.scss'
import Sprites from "./sprites.js";

document.querySelector('#app').innerHTML = `
${Sprites()} <!--Logos-->
<div>
    <header>
     <div class="container">
        <div class="header__inner">
                <svg class="logo" width="149" height="37" viewBox="0 0 149 37">
                    <use xlink:href="#LaslesVPN"></use>
                </svg>
                <nav class="menu">
                    <button class="menu__btn">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </button>
                    <ul class="menu__list">
                        <li>
                            <svg class="mobile__logo" width="35" height="37" viewBox="0 0 35 37">
                                <use xlink:href="#shortLogo"></use>
                            </svg>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">About</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Features</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Pricing</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Testimonials</a>
                        </li>
                        <li class="menu__list-item">
                            <a href="#">Help</a>
                        </li>
                        <li class="mobile-nav">
                            <ul class="mobile__action-user">
                                <li class="mobile__action--item-signIn">
                                    <button>
                                        <a href="#" class="user__action-link">Sign In</a>
                                    </button>
                                </li>
                                <li class="mobile__action--item-signUp">
                                    <button>
                                        <a href="#" class="user__action-link">Sign Up</a>
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="user__actions">
                        <li class="user__action--item-signIn">
                            <button>
                                <a href="#" class="user__action-link">Sign In</a>
                            </button>
                        </li>
                        <li class="user__action--item-signUp">
                            <button>
                                <a href="#" class="user__action-link">Sign Up</a>
                            </button>
                        </li>
                    </ul> 
                </nav>
            </div>
        </div>
    </header>
    <section class="intro">
        <div class="container">
            <div class="intro__inner">
                <ul class="intro__info">
                    <li class="intro__item-mainText">
                        <h1>Want anything to be easy with <span>LaslesVPN</span></h1>
                    </li>
                    <li class="intro__item-text">
                        <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
                    </li>
                    <li class="intro__item-btn">
                        <button>
                            <a href="">Get Started</a>
                        </button>
                    </li>
                </ul>
                <!--<svg class="introPicture" width="610" height="450" viewBox="0 0 615 450">
                    <use xlink:href="#Intro"></use>
                </svg>-->
                <img src="../../public/img/Intro.svg" alt="">
            </div>
        </div>
    </section>
</div>
`

const menuList = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__btn');
const mobileLogoOpen = document.querySelector('.mobile__logo')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuBtn.classList.toggle('change');
    mobileLogoOpen.classList.toggle('mobile__logo-open');
    document.body.classList.toggle('no-scroll')
});