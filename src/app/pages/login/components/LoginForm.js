"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    router.push('/pages/tickets');
  };

  const handleCreateAccount = () => {
    router.push('/pages/create-account');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
         <svg width="302" height="70" viewBox="0 0 302 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41 38.14C38.2935 38.138 35.6472 38.9389 33.396 40.4413C31.1448 41.9437 29.3899 44.0802 28.3532 46.5803C27.3166 49.0804 27.0448 51.8318 27.5724 54.4864C28.0999 57.141 29.403 59.5794 31.3168 61.4932C33.2306 63.407 35.669 64.7101 38.3236 65.2376C40.9782 65.7652 43.7296 65.4934 46.2297 64.4568C48.7298 63.4201 50.8663 61.6652 52.3687 59.414C53.8711 57.1628 54.672 54.5165 54.67 51.81C54.6674 48.1853 53.2263 44.7098 50.6632 42.1468C48.1002 39.5837 44.6247 38.1426 41 38.14ZM41 54.63C40.4418 54.632 39.8956 54.4683 39.4306 54.1596C38.9655 53.851 38.6025 53.4112 38.3875 52.8961C38.1726 52.381 38.1153 51.8137 38.223 51.266C38.3307 50.7183 38.5984 50.2149 38.9924 49.8195C39.3864 49.4241 39.8889 49.1546 40.4362 49.0449C40.9835 48.9353 41.551 48.9906 42.0668 49.2037C42.5827 49.4169 43.0237 49.7783 43.334 50.2423C43.6444 50.7062 43.81 51.2518 43.81 51.81C43.8113 52.1799 43.7396 52.5463 43.599 52.8884C43.4584 53.2305 43.2516 53.5414 42.9905 53.8034C42.7295 54.0654 42.4192 54.2733 42.0777 54.4151C41.7361 54.557 41.3699 54.63 41 54.63Z" fill="#6C4A92"/>
<path d="M9.71 5.6C11.4244 5.5452 13.132 5.83963 14.729 6.46538C16.3261 7.09113 17.7792 8.03513 19 9.24C20.2267 10.3901 21.1967 11.7863 21.8463 13.3373C22.496 14.8883 22.8108 16.559 22.77 18.24C22.8057 19.9213 22.4877 21.5913 21.8365 23.1417C21.1853 24.6922 20.2155 26.0884 18.99 27.24C17.7665 28.4434 16.3113 29.3856 14.7126 30.0096C13.1139 30.6336 11.4052 30.9263 9.69 30.87H0V5.6H9.71ZM6.83 11.73V24.67H9.71C10.514 24.6741 11.3101 24.5119 12.0484 24.1935C12.7867 23.8751 13.4511 23.4075 14 22.82C14.6244 22.2247 15.1169 21.505 15.4459 20.7075C15.7749 19.91 15.933 19.0524 15.91 18.19C15.9428 17.3332 15.8 16.4787 15.4904 15.679C15.1809 14.8794 14.7111 14.1515 14.11 13.54C13.5437 12.9395 12.8553 12.4672 12.0911 12.155C11.327 11.8428 10.5048 11.6979 9.68 11.73H6.83Z" fill="#6C4A92"/>
<path d="M66.77 15.86V30.78H59.93V5.6H66.05L73.77 15.5L81.52 5.6H87.63V30.78H80.8V15.86L73.8 24.67L66.77 15.86Z" fill="#6C4A92"/>
<path d="M0 64.41V39.22H13.93C16.1855 39.1178 18.4029 39.8274 20.18 41.22C20.9062 41.765 21.4975 42.4695 21.9085 43.2792C22.3194 44.0889 22.5388 44.9821 22.55 45.89C22.557 46.5708 22.4453 47.2476 22.22 47.89C22.0389 48.4362 21.7649 48.947 21.41 49.4C21.1206 49.755 20.8065 50.0892 20.47 50.4C20.2242 50.6324 19.9484 50.8308 19.65 50.99L19.32 51.16L19.8 51.37C20.1754 51.5448 20.5365 51.7487 20.88 51.98C21.376 52.2637 21.836 52.6062 22.25 53C22.7044 53.4933 23.0698 54.0618 23.33 54.68C23.6507 55.4112 23.8143 56.2016 23.81 57C23.7991 57.9983 23.5622 58.9812 23.1171 59.8749C22.672 60.7686 22.0303 61.5498 21.24 62.16C19.3927 63.6882 17.0454 64.4789 14.65 64.38L0 64.41ZM6.83 44.63V48.93H13.21C13.8304 48.964 14.4398 48.7561 14.91 48.35C15.1202 48.1478 15.285 47.9033 15.3936 47.6327C15.5022 47.362 15.5521 47.0714 15.54 46.78C15.5546 46.4898 15.5058 46.1999 15.397 45.9305C15.2882 45.6611 15.122 45.4187 14.91 45.22C14.4408 44.8112 13.8316 44.5998 13.21 44.63H6.83ZM14.1 59C14.4657 59.0226 14.8321 58.9694 15.1762 58.8438C15.5204 58.7182 15.8349 58.5229 16.1 58.27C16.3407 58.0361 16.532 57.7562 16.6627 57.4471C16.7934 57.1379 16.8607 56.8057 16.8607 56.47C16.8607 56.1343 16.7934 55.8021 16.6627 55.4929C16.532 55.1838 16.3407 54.9039 16.1 54.67C15.8327 54.4209 15.5176 54.2287 15.1738 54.1049C14.8301 53.9811 14.4647 53.9284 14.1 53.95H6.83V59H14.1Z" fill="#6C4A92"/>
<path d="M70.75 55.48C70.2412 55.1076 69.6732 54.8236 69.07 54.64L66.79 53.93C65.9327 53.6602 65.0969 53.3259 64.29 52.93C63.4762 52.5757 62.7075 52.1259 62 51.59C61.2765 51.0054 60.701 50.2586 60.32 49.41C59.8717 48.4179 59.6496 47.3385 59.67 46.25C59.6832 45.2037 59.9308 44.1737 60.3946 43.2357C60.8584 42.2977 61.5266 41.4757 62.35 40.83C64.2694 39.2309 66.7137 38.4006 69.21 38.5C70.3046 38.4959 71.3958 38.6235 72.46 38.88C73.3289 39.0748 74.1692 39.3807 74.96 39.79C75.5501 40.0877 76.1212 40.4217 76.67 40.79C77.0493 41.0427 77.3867 41.3531 77.67 41.71L78 42.06L74 46.21C73.8394 46.0214 73.6692 45.8411 73.49 45.67C73.0481 45.3236 72.5684 45.0284 72.06 44.79C71.4236 44.4562 70.7184 44.2748 70 44.26C69.2991 44.2353 68.6132 44.4663 68.07 44.91C67.8339 45.086 67.641 45.3134 67.5058 45.575C67.3707 45.8367 67.2969 46.1256 67.29 46.42C67.2949 46.656 67.3565 46.8873 67.4696 47.0944C67.5827 47.3016 67.7441 47.4784 67.94 47.61C68.4511 47.9787 69.0184 48.2623 69.62 48.45C70.3 48.68 71.06 48.92 71.89 49.17C72.7422 49.445 73.5743 49.7792 74.38 50.17C75.1924 50.5414 75.9577 51.008 76.66 51.56C77.3855 52.1385 77.9616 52.8827 78.34 53.73C78.7851 54.7094 79.0103 55.7743 79 56.85C79.0123 57.9761 78.7706 59.0905 78.2928 60.1102C77.8149 61.13 77.1133 62.0289 76.24 62.74C74.1761 64.4082 71.5706 65.2588 68.92 65.13C67.709 65.1339 66.5025 64.9827 65.33 64.68C64.338 64.4426 63.3802 64.0797 62.48 63.6C61.7865 63.2206 61.1184 62.7963 60.48 62.33C60.0186 62.0135 59.5928 61.6481 59.21 61.24L58.83 60.81L62.78 56.68C62.8411 56.7946 62.9149 56.9019 63 57C63.12 57.12 63.36 57.33 63.72 57.65C64.0716 57.9592 64.4498 58.2369 64.85 58.48C65.3217 58.7543 65.8255 58.9693 66.35 59.12C66.9279 59.3094 67.5319 59.4073 68.14 59.41C68.9908 59.4444 69.8242 59.1631 70.48 58.62C70.7645 58.3919 70.9941 58.1026 71.1516 57.7737C71.3091 57.4448 71.3906 57.0847 71.39 56.72C71.3918 56.4769 71.3345 56.2371 71.223 56.021C71.1115 55.805 70.9492 55.6194 70.75 55.48Z" fill="#6C4A92"/>
<path d="M91.72 57C92.3978 57.6653 93.204 58.1857 94.0893 58.5296C94.9747 58.8734 95.9208 59.0335 96.87 59C98.1221 59.0045 99.3592 58.7277 100.49 58.19C101.401 57.7998 102.232 57.2437 102.94 56.55L103.7 55.75L107.7 60.07C107.61 60.21 107.47 60.39 107.29 60.62C106.893 61.0632 106.462 61.4744 106 61.85C105.338 62.431 104.621 62.9468 103.86 63.39C102.91 63.9052 101.903 64.3079 100.86 64.59C99.5851 64.9526 98.2655 65.1344 96.94 65.13C95.0951 65.1763 93.2597 64.8524 91.5421 64.1774C89.8246 63.5024 88.2597 62.49 86.94 61.2C85.6521 59.9995 84.625 58.5467 83.9228 56.9321C83.2206 55.3175 82.8582 53.5757 82.8582 51.815C82.8582 50.0543 83.2206 48.3125 83.9228 46.6979C84.625 45.0833 85.6521 43.6305 86.94 42.43C88.7469 40.7229 90.9633 39.5105 93.3753 38.9097C95.7873 38.3088 98.3135 38.34 100.71 39C101.762 39.2829 102.771 39.7067 103.71 40.26C104.431 40.7087 105.122 41.2031 105.78 41.74C106.257 42.1093 106.69 42.5321 107.07 43L107.48 43.51L103.33 47.83L103.05 47.47C102.795 47.1981 102.524 46.941 102.24 46.7C101.83 46.3284 101.389 45.9938 100.92 45.7C100.359 45.3603 99.7531 45.1011 99.12 44.93C98.392 44.7003 97.6334 44.5822 96.87 44.58C95.4294 44.5763 94.0202 45.0007 92.8212 45.7992C91.6222 46.5978 90.6875 47.7346 90.1357 49.0653C89.5839 50.3961 89.4399 51.8607 89.722 53.2734C90.0041 54.6861 90.6995 55.9832 91.72 57Z" fill="#6C4A92"/>
<path d="M52.49 28.75C52.4069 28.7479 52.3265 28.7199 52.26 28.67L42.84 22C42.7923 21.9708 42.751 21.932 42.7188 21.8863C42.6866 21.8405 42.6641 21.7886 42.6527 21.7337C42.6413 21.6789 42.6413 21.6223 42.6526 21.5675C42.6639 21.5127 42.6863 21.4607 42.7185 21.4149C42.7506 21.3691 42.7918 21.3303 42.8395 21.301C42.8872 21.2717 42.9405 21.2525 42.9959 21.2445C43.0513 21.2366 43.1078 21.24 43.1618 21.2547C43.2158 21.2694 43.2663 21.2951 43.31 21.33L49.9 26L42.69 17.74C42.6545 17.6993 42.6274 17.652 42.6103 17.6008C42.5931 17.5496 42.5862 17.4956 42.5899 17.4417C42.5936 17.3879 42.6079 17.3353 42.6319 17.2869C42.656 17.2386 42.6893 17.1955 42.73 17.16C42.7707 17.1245 42.818 17.0975 42.8692 17.0803C42.9204 17.0631 42.9744 17.0562 43.0283 17.0599C43.0821 17.0636 43.1347 17.0779 43.1831 17.1019C43.2314 17.126 43.2745 17.1593 43.31 17.2L52.8 28.07C52.8675 28.1437 52.9049 28.2401 52.9049 28.34C52.9049 28.4399 52.8675 28.5363 52.8 28.61C52.7614 28.6542 52.7137 28.6895 52.6602 28.7137C52.6067 28.7378 52.5487 28.7502 52.49 28.75Z" fill="#6C4A92"/>
<path d="M47.21 35C47.1207 34.9982 47.0338 34.9704 46.96 34.92L42.05 31.07L35.63 32.32C35.55 32.3351 35.4674 32.326 35.3926 32.2939C35.3178 32.2619 35.2542 32.2083 35.21 32.14C35.164 32.0721 35.1394 31.992 35.1394 31.91C35.1394 31.828 35.164 31.7479 35.21 31.68L38 27.9L35 25.59L31.32 30.91C31.2666 30.9856 31.1893 31.0409 31.1005 31.067C31.0117 31.093 30.9167 31.0883 30.831 31.0535C30.7453 31.0188 30.6738 30.956 30.6282 30.8755C30.5827 30.795 30.5657 30.7014 30.58 30.61L31.58 25.45L27.37 25.56C27.2809 25.5617 27.1936 25.5343 27.1214 25.482C27.0492 25.4297 26.9961 25.3553 26.97 25.27C26.9433 25.1853 26.9455 25.0942 26.9762 25.0109C27.007 24.9276 27.0646 24.8569 27.14 24.81L32.33 21.35L32.69 19.35L25.94 20.72C25.8549 20.7392 25.7658 20.7301 25.6864 20.694C25.6069 20.6579 25.5415 20.5968 25.5 20.52C25.4607 20.4432 25.4454 20.3564 25.4561 20.2708C25.4668 20.1852 25.503 20.1048 25.56 20.04L34.36 10.67C34.4206 10.6071 34.4997 10.5652 34.5858 10.5504C34.6719 10.5356 34.7605 10.5487 34.8386 10.5877C34.9168 10.6268 34.9804 10.6898 35.0202 10.7676C35.06 10.8453 35.074 10.9338 35.06 11.02L33.72 18.3L38.27 17.38C38.3626 17.3608 38.459 17.3742 38.5428 17.418C38.6266 17.4617 38.6928 17.5331 38.73 17.62C38.7651 17.708 38.7693 17.8054 38.7421 17.8961C38.7149 17.9869 38.6577 18.0658 38.58 18.12L33.07 21.78L32.56 24.55L34.77 24.5L37.64 20.33C37.6781 20.2757 37.7292 20.2317 37.7885 20.202C37.8479 20.1724 37.9137 20.1579 37.98 20.16C38.0469 20.1607 38.1127 20.1775 38.1718 20.2088C38.231 20.2401 38.2818 20.2851 38.32 20.34L40.77 24.04L42.77 21.33C42.7947 21.2952 42.8252 21.2647 42.86 21.24L50.86 15.52C50.949 15.4655 51.0554 15.447 51.1575 15.4682C51.2597 15.4894 51.3499 15.5488 51.4098 15.6342C51.4697 15.7196 51.4948 15.8246 51.48 15.9279C51.4651 16.0312 51.4115 16.1249 51.33 16.19L43.33 21.87L41.33 24.64L50.25 28.64C50.3294 28.6755 50.3954 28.7353 50.4385 28.8108C50.4817 28.8863 50.4997 28.9736 50.49 29.06C50.4767 29.1459 50.4383 29.2259 50.3795 29.29C50.3208 29.3541 50.2444 29.3993 50.16 29.42L45 30.5L47.55 34.37C47.6041 34.4494 47.6279 34.5457 47.6169 34.6412C47.6059 34.7367 47.5608 34.825 47.49 34.89C47.4533 34.9264 47.4095 34.955 47.3613 34.9739C47.3132 34.9928 47.2617 35.0017 47.21 35ZM43.11 30.87L45.49 32.73L44.13 30.67L43.11 30.87ZM38.63 28.4L36.5 31.32L41.19 30.41L38.63 28.4ZM39.11 27.74L42.26 30.2L43.64 29.93L40.73 25.53L39.11 27.74ZM41.93 25.85L44.51 29.76L48.75 28.94L41.93 25.85ZM32.41 25.43L31.77 28.88L34.19 25.38L32.41 25.43ZM36.03 25.33L38.47 27.24L39.94 25.24L36.03 25.33ZM32.13 22.47L28.77 24.7L31.77 24.63L32.13 22.47ZM38 21.35L35.81 24.52L40 24.41L38 21.35ZM33.59 19.22L33.31 20.71L36.42 18.64L33.59 19.22ZM34 12.29L27 19.72L32.81 18.53L34 12.29Z" fill="#6C4A92"/>
<path d="M52.49 28.75C52.3957 28.7434 52.3069 28.7036 52.2392 28.6377C52.1714 28.5718 52.1292 28.484 52.12 28.39L50.8 16.39L43.1 17.86C43.0076 17.878 42.9118 17.8627 42.8294 17.817C42.7471 17.7713 42.6836 17.698 42.65 17.61C42.6149 17.52 42.6127 17.4205 42.6438 17.329C42.6749 17.2375 42.7373 17.16 42.82 17.11L50.39 12.57L50.21 10.93L47.14 10.81L44 15.26C43.9486 15.3326 43.8749 15.3865 43.7901 15.4136C43.7053 15.4407 43.614 15.4394 43.53 15.41C43.4467 15.379 43.375 15.3229 43.3248 15.2495C43.2747 15.1761 43.2486 15.0889 43.25 15L43.47 10.65L42.17 10.6L40.17 16.27C40.1502 16.3117 40.1223 16.3491 40.088 16.38C40.0537 16.4109 40.0136 16.4347 39.97 16.45C39.9243 16.4701 39.8749 16.4805 39.825 16.4805C39.7751 16.4805 39.7257 16.4701 39.68 16.45C39.6387 16.4262 39.6015 16.3958 39.57 16.36L31.19 7.94L30.51 15.85C30.5063 15.9035 30.4918 15.9557 30.4675 16.0035C30.4432 16.0513 30.4095 16.0937 30.3684 16.1282C30.3274 16.1628 30.2798 16.1887 30.2285 16.2044C30.1773 16.2202 30.1234 16.2255 30.07 16.22C30.016 16.2177 29.9631 16.2042 29.9146 16.1803C29.866 16.1564 29.823 16.1227 29.7882 16.0814C29.7535 16.04 29.7276 15.9918 29.7125 15.94C29.6973 15.8881 29.693 15.8336 29.7 15.78L30.46 7C30.4636 6.9224 30.4902 6.84763 30.5365 6.78527C30.5828 6.72292 30.6467 6.67581 30.72 6.65C30.7949 6.62046 30.8769 6.61419 30.9554 6.63204C31.0339 6.64988 31.1052 6.69099 31.16 6.75L38.7 14.49L37.12 10.19C34.8 3.85 34.8 3.85 35 3.62C35.0365 3.57434 35.0819 3.5366 35.1335 3.50909C35.1851 3.48158 35.2417 3.46488 35.3 3.46C35.3572 3.45725 35.4143 3.46651 35.4677 3.48717C35.5211 3.50784 35.5696 3.53946 35.61 3.58L41.61 9.69L43.8 3.35C43.832 3.25815 43.8963 3.18109 43.981 3.13323C44.0656 3.08538 44.1648 3.07001 44.26 3.09C44.3561 3.10903 44.4422 3.16184 44.5028 3.23889C44.5633 3.31593 44.5943 3.41211 44.59 3.51L44.28 9.86L46.69 9.96L49.69 5.69C49.7376 5.6235 49.8039 5.57273 49.8805 5.54422C49.9571 5.51571 50.0405 5.51076 50.12 5.53C50.2013 5.55291 50.2741 5.59928 50.3292 5.6633C50.3844 5.72733 50.4194 5.80617 50.43 5.89L50.89 10.13L54.29 10.27C54.3783 10.2738 54.463 10.3061 54.5315 10.3619C54.5999 10.4178 54.6485 10.4943 54.67 10.58C54.6917 10.6644 54.686 10.7535 54.6536 10.8344C54.6212 10.9154 54.5639 10.9839 54.49 11.03L51.21 13.03L51.47 15.45L55.91 14.6C55.9783 14.586 56.0491 14.5897 56.1156 14.6107C56.1821 14.6317 56.2421 14.6693 56.29 14.72C56.3355 14.7728 56.3675 14.8359 56.3831 14.9039C56.3988 14.9718 56.3977 15.0426 56.38 15.11L52.89 28.44C52.8661 28.5281 52.8141 28.6061 52.7419 28.662C52.6698 28.7179 52.5813 28.7488 52.49 28.75ZM51.58 16.23L52.66 26.1L55.45 15.49L51.58 16.23ZM50.45 13.46L45.18 16.62L50.68 15.56L50.45 13.46ZM36.27 5.46C37.06 7.67 38.54 11.69 39.74 14.95L41.29 10.54C41.2498 10.5227 41.2127 10.4991 41.18 10.47L36.27 5.46ZM44.27 10.7L44.13 13.7L46.13 10.82L44.27 10.7ZM51 11L51.13 12.15L52.91 11H51ZM47.67 10L50.09 10.1L49.75 7.1L47.67 10ZM42.41 9.79H43.47L43.64 6.24L42.41 9.79Z" fill="#6C4A92"/>
<path d="M121.57 65.46C121.391 65.4797 121.209 65.4797 121.03 65.46C119.284 64.9475 117.649 64.1132 116.21 63C114.699 61.9936 113.398 60.703 112.38 59.2C111.447 57.6349 110.816 55.9082 110.52 54.11C110.505 52.9806 110.883 51.8812 111.59 51C112.009 50.4189 112.314 49.7642 112.49 49.07C112.488 48.2904 112.331 47.519 112.03 46.8C111.67 45.69 111.29 44.55 111.74 43.61C112.19 42.67 113.4 42.25 114.55 41.88C115.279 41.7793 115.982 41.5381 116.62 41.17C116.994 40.7441 117.328 40.2856 117.62 39.8C118.181 38.8346 119.007 38.0503 120 37.54C121.085 37.13 122.24 36.9363 123.4 36.97C123.75 36.97 124.08 36.8 124.4 36.77C125.85 36.6374 127.311 36.8251 128.68 37.32C130.033 37.8383 131.275 38.6086 132.34 39.59C133.455 40.5108 134.437 41.5808 135.26 42.77C135.646 43.2641 136.089 43.7106 136.58 44.1C137.314 44.6475 137.912 45.3555 138.33 46.17C138.697 47.2116 138.893 48.3058 138.91 49.41C138.91 49.86 138.91 50.28 139.02 50.67C139.395 52.4104 139.298 54.2194 138.74 55.91C138.593 56.29 138.443 56.7 138.29 57.14C137.934 58.5353 137.248 59.8247 136.29 60.9C135.345 61.5106 134.217 61.7723 133.1 61.64C132.312 61.5881 131.521 61.6865 130.77 61.93C130.27 62.16 129.77 62.44 129.3 62.72C128.357 63.3359 127.31 63.7764 126.21 64.02C125.518 64.1647 124.847 64.393 124.21 64.7C123.385 65.1163 122.49 65.3741 121.57 65.46ZM125.34 37.55H124.48C124.13 37.55 123.78 37.74 123.48 37.75C122.427 37.7163 121.377 37.8896 120.39 38.26C119.549 38.7261 118.856 39.4191 118.39 40.26C118.05 40.7172 117.664 41.1393 117.24 41.52C116.537 42.0631 115.725 42.4485 114.86 42.65C113.86 42.96 112.86 43.28 112.53 43.95C112.345 44.8226 112.461 45.7321 112.86 46.53C113.205 47.363 113.372 48.2588 113.35 49.16C113.177 49.9746 112.837 50.7442 112.35 51.42C111.756 52.1317 111.406 53.0148 111.35 53.94C111.629 55.632 112.222 57.2567 113.1 58.73C114.058 60.1327 115.277 61.3379 116.69 62.28C118.041 63.3334 119.577 64.1238 121.22 64.61C122.174 64.6515 123.12 64.4227 123.95 63.95C124.638 63.6207 125.363 63.3756 126.11 63.22C127.109 62.9855 128.058 62.5722 128.91 62C129.4 61.72 129.91 61.43 130.44 61.18C131.293 60.88 132.198 60.7542 133.1 60.81C134.018 60.9324 134.95 60.7459 135.75 60.28C136.61 59.3024 137.224 58.1332 137.54 56.87C137.7 56.41 137.85 55.99 138.01 55.59C138.508 54.0344 138.584 52.3746 138.23 50.78C138.17 50.35 138.14 49.92 138.11 49.45C138.104 48.429 137.931 47.4158 137.6 46.45C137.226 45.7546 136.7 45.1529 136.06 44.69C135.52 44.2517 135.033 43.7516 134.61 43.2C133.829 42.0777 132.897 41.0682 131.84 40.2C130.851 39.2772 129.693 38.5539 128.43 38.07C127.438 37.7203 126.392 37.5444 125.34 37.55Z" fill="#6C4A92"/>
<path d="M122.82 62.6C122.594 62.6024 122.369 62.5756 122.15 62.52C121.292 62.25 120.541 61.7185 120 61C119.704 60.6312 119.369 60.2959 119 60C117.951 59.3256 117.058 58.436 116.38 57.39C116.054 56.9637 115.658 56.5952 115.21 56.3C114.43 55.7 113.62 55.09 113.48 54.17C113.453 53.2435 113.731 52.3338 114.27 51.58C114.56 51.0982 114.785 50.5804 114.94 50.04C115.011 49.4957 115.011 48.9443 114.94 48.4C114.782 47.4955 114.915 46.5641 115.32 45.74C116.011 44.928 116.955 44.3716 118 44.16C118.431 44.0237 118.853 43.8566 119.26 43.66C119.562 43.4916 119.856 43.3081 120.14 43.11C121 42.3902 122.088 42.0003 123.21 42.01H123.49C124.784 41.8392 126.096 41.8696 127.38 42.1C128.405 42.4402 129.351 42.9845 130.16 43.7L130.99 44.32L131.76 44.82C132.749 45.3487 133.615 46.0815 134.3 46.97C134.677 47.776 134.762 48.6882 134.54 49.55C134.441 50.0806 134.414 50.6222 134.46 51.16C134.73 52.4055 134.73 53.6945 134.46 54.94C134.359 55.4267 134.312 55.923 134.32 56.42C134.399 57.3346 134.189 58.2509 133.72 59.04C133.069 59.6919 132.208 60.0922 131.29 60.17C130.748 60.2564 130.222 60.425 129.73 60.67C128.634 61.3041 127.418 61.7026 126.16 61.84C125.687 61.9258 125.223 62.0495 124.77 62.21C124.146 62.4463 123.487 62.5781 122.82 62.6ZM122.93 42.78C122.077 42.8736 121.272 43.2221 120.62 43.78C120.31 43.98 119.99 44.2 119.62 44.37C119.174 44.5876 118.713 44.7714 118.24 44.92C117.379 45.0978 116.598 45.5464 116.01 46.2C115.703 46.8903 115.613 47.6572 115.75 48.4C115.83 49.0107 115.83 49.6293 115.75 50.24C115.586 50.8598 115.334 51.4525 115 52C114.559 52.6128 114.315 53.3452 114.3 54.1C114.39 54.71 115.03 55.2 115.72 55.72C116.248 56.0675 116.714 56.5001 117.1 57C117.72 57.9601 118.542 58.7725 119.51 59.38C119.922 59.7008 120.301 60.0626 120.64 60.46C121.075 61.0451 121.668 61.4929 122.35 61.75C123.077 61.837 123.814 61.7228 124.48 61.42C124.974 61.2371 125.482 61.0966 126 61C127.151 60.8972 128.268 60.5567 129.28 60C129.847 59.7143 130.454 59.5154 131.08 59.41C131.803 59.3509 132.487 59.0598 133.03 58.58C133.396 57.9187 133.553 57.1622 133.48 56.41C133.468 55.8556 133.521 55.3017 133.64 54.76C133.885 53.6163 133.885 52.4337 133.64 51.29C133.579 50.6797 133.602 50.0638 133.71 49.46C133.891 48.7782 133.849 48.0562 133.59 47.4C132.969 46.6101 132.189 45.9594 131.3 45.49C131.02 45.32 130.75 45.15 130.5 44.97C130.25 44.79 129.94 44.56 129.64 44.33C128.919 43.685 128.076 43.1918 127.16 42.88C125.964 42.6699 124.743 42.6463 123.54 42.81H123.13L122.93 42.78Z" fill="#6C4A92"/>
<path d="M124.08 66.33C123.967 66.3447 123.853 66.3447 123.74 66.33C122.427 66.0052 121.167 65.4933 120 64.81C119.301 64.368 118.737 63.7417 118.37 63C118.126 62.5433 117.82 62.1226 117.46 61.75C116.538 60.9296 115.713 60.007 115 59C114.703 58.5961 114.368 58.2212 114 57.88C113.389 57.3535 112.883 56.7155 112.51 56C112.024 54.8071 111.662 53.5672 111.43 52.3C111.053 50.8453 111.008 49.3243 111.3 47.85C111.713 46.4044 112.392 45.0481 113.3 43.85C113.86 43.12 113.98 42.5 114.81 42.08C115.287 41.8571 115.745 41.5962 116.18 41.3C116.56 41.01 116.94 40.82 117.31 40.49C118.235 39.8701 119.246 39.3884 120.31 39.06C121.394 38.6931 122.536 38.527 123.68 38.57C123.98 38.57 124.27 38.41 124.55 38.4C125.583 38.44 126.589 38.7355 127.48 39.26L127.99 39.51C128.9 39.9819 129.736 40.585 130.47 41.3L130.84 41.62C131.252 41.9185 131.717 42.1357 132.21 42.26C132.996 42.4451 133.709 42.8592 134.26 43.45C135.035 44.4595 135.705 45.5451 136.26 46.69C136.578 47.4754 136.774 48.3051 136.84 49.15C136.9 49.59 136.95 50.01 137.04 50.41C137.191 51.2957 137.208 52.1992 137.09 53.09C137.09 53.42 137.03 53.77 137.01 54.09V54.5C137.004 55.7409 136.89 56.9789 136.67 58.2C136.444 59.5913 135.923 60.9179 135.14 62.09C134.219 63.1703 133.008 63.9648 131.65 64.38C130.73 64.6856 129.769 64.8507 128.8 64.87L127.62 64.97C127.059 65.0753 126.521 65.2784 126.03 65.57C125.446 65.9682 124.779 66.2281 124.08 66.33ZM124.72 39.33H124.62C124.34 39.33 124.04 39.51 123.73 39.51C122.689 39.4623 121.648 39.6081 120.66 39.94C119.684 40.2252 118.757 40.6568 117.91 41.22C117.53 41.56 117.13 41.76 116.71 42.08C116.24 42.4021 115.745 42.6864 115.23 42.93C114.45 43.33 114.45 43.93 113.99 44.48C113.137 45.5726 112.493 46.8134 112.09 48.14C111.838 49.4905 111.886 50.88 112.23 52.21C112.44 53.4214 112.775 54.6078 113.23 55.75C113.549 56.3554 113.98 56.8949 114.5 57.34C114.903 57.7165 115.271 58.1281 115.6 58.57C116.288 59.524 117.084 60.3963 117.97 61.17C118.395 61.5891 118.753 62.0715 119.03 62.6C119.325 63.2074 119.769 63.7303 120.32 64.12C121.427 64.7491 122.614 65.2235 123.85 65.53C124.487 65.5234 125.109 65.3323 125.64 64.98C126.219 64.6454 126.852 64.4153 127.51 64.3C127.94 64.25 128.33 64.22 128.71 64.19C129.6 64.1808 130.484 64.0358 131.33 63.76C132.544 63.4093 133.632 62.7147 134.46 61.76C135.181 60.6832 135.655 59.4609 135.85 58.18C136.06 57.0083 136.167 55.8204 136.17 54.63V54.22C136.17 53.86 136.22 53.5 136.25 53.16C136.371 52.3545 136.371 51.5355 136.25 50.73C136.16 50.29 136.1 49.84 136.04 49.4C135.986 48.638 135.814 47.8891 135.53 47.18C134.999 46.0876 134.362 45.0493 133.63 44.08C133.169 43.629 132.59 43.317 131.96 43.18C131.368 43.0181 130.812 42.7468 130.32 42.38L130 42C129.327 41.3406 128.562 40.7816 127.73 40.34L127.21 40.09C126.45 39.6401 125.599 39.3667 124.72 39.29V39.33Z" fill="#6C4A92"/>
<path d="M126.13 61.29C125.937 61.3049 125.743 61.3049 125.55 61.29C125.07 61.1757 124.626 60.9418 124.26 60.61C123.998 60.3864 123.705 60.2012 123.39 60.06C122.669 59.7493 121.996 59.3386 121.39 58.84C121.136 58.6644 120.861 58.5231 120.57 58.42C120.058 58.248 119.593 57.9606 119.21 57.58C118.862 57.1448 118.57 56.6678 118.34 56.16C118.22 55.91 118.1 55.68 117.97 55.46C117.84 55.24 117.74 55.08 117.62 54.89C117.266 54.3987 116.984 53.8601 116.78 53.29C116.521 52.4726 116.406 51.6166 116.44 50.76C116.551 50.0905 116.837 49.4624 117.27 48.94C117.39 48.78 117.5 48.62 117.6 48.46C117.76 48.21 117.9 47.94 118.03 47.69C118.218 47.2862 118.45 46.904 118.72 46.55C119.087 46.1298 119.511 45.763 119.98 45.46C120.15 45.34 120.32 45.23 120.46 45.11L120.63 44.98C121.177 44.4683 121.829 44.0809 122.54 43.8444C123.251 43.608 124.005 43.528 124.75 43.61C125.519 43.7139 126.27 43.926 126.98 44.24C127.2 44.32 127.45 44.38 127.72 44.45C128.223 44.5531 128.708 44.7283 129.16 44.97C129.931 45.4341 130.651 45.9771 131.31 46.59C131.722 47.0031 132.067 47.479 132.33 48C132.47 48.25 132.61 48.48 132.75 48.7C132.89 48.92 133.1 49.14 133.29 49.38C133.723 49.8211 134.063 50.3448 134.29 50.92C134.607 51.8076 134.75 52.7482 134.71 53.69C134.542 54.6337 134.174 55.5305 133.63 56.32C133.349 56.7367 133.012 57.1134 132.63 57.44C132.411 57.6307 132.204 57.8344 132.01 58.05C131.815 58.3088 131.641 58.5831 131.49 58.87C131.271 59.322 130.965 59.7263 130.59 60.06C129.985 60.4511 129.303 60.707 128.59 60.81L128.1 60.93C127.462 61.1358 126.8 61.2568 126.13 61.29ZM124.18 44.29C123.643 44.2981 123.111 44.3857 122.6 44.55C122.038 44.7899 121.523 45.1286 121.08 45.55L120.92 45.68C120.75 45.82 120.57 45.94 120.4 46.06C119.989 46.3172 119.618 46.634 119.3 47C119.065 47.3126 118.86 47.6476 118.69 48C118.55 48.27 118.4 48.54 118.23 48.82L117.89 49.34C117.536 49.749 117.292 50.241 117.18 50.77C117.16 51.5261 117.268 52.28 117.5 53C117.681 53.4985 117.93 53.9696 118.24 54.4C118.37 54.6 118.5 54.8 118.62 55C118.74 55.2 118.89 55.5 119.01 55.75C119.206 56.2019 119.462 56.6256 119.77 57.01C120.072 57.2945 120.434 57.5065 120.83 57.63C121.186 57.7653 121.522 57.9468 121.83 58.17C122.389 58.6255 123.013 58.9961 123.68 59.27C124.06 59.4448 124.416 59.6666 124.74 59.93C124.996 60.1697 125.304 60.3476 125.64 60.45C126.373 60.6105 127.13 60.6275 127.87 60.5L128.39 60.38C128.992 60.1849 129.55 59.8722 130.03 59.46C130.327 59.1764 130.565 58.8364 130.73 58.46C130.904 58.1339 131.105 57.8229 131.33 57.53C131.548 57.2852 131.782 57.0547 132.03 56.84C132.37 56.5476 132.669 56.2113 132.92 55.84C133.408 55.1504 133.749 54.3674 133.92 53.54C133.945 52.6995 133.813 51.8618 133.53 51.07C133.329 50.5993 133.045 50.169 132.69 49.8C132.49 49.56 132.28 49.32 132.1 49.06C131.92 48.8 131.79 48.55 131.64 48.3C131.404 47.821 131.093 47.3823 130.72 47C130.104 46.4305 129.434 45.9215 128.72 45.48C128.33 45.2849 127.917 45.1404 127.49 45.05C127.204 44.9865 126.924 44.903 126.65 44.8C126.011 44.5238 125.339 44.3322 124.65 44.23L124.18 44.29Z" fill="#6C4A92"/>
<path d="M158.46 0H156.98V69.06H158.46V0Z" fill="#6C4A92"/>
<path d="M177.18 21C177.649 20.9845 178.117 21.0653 178.553 21.2373C178.99 21.4092 179.387 21.6688 179.72 22C180.049 22.3196 180.308 22.7043 180.48 23.1296C180.653 23.5549 180.734 24.0114 180.72 24.47C180.732 24.9312 180.649 25.39 180.477 25.8182C180.305 26.2463 180.047 26.6349 179.72 26.96C179.385 27.2874 178.987 27.5445 178.551 27.7162C178.115 27.888 177.649 27.9708 177.18 27.96H174.18V32H173V21H177.18ZM174.18 22.11V26.85H177.18C177.496 26.8708 177.813 26.8236 178.109 26.7117C178.406 26.5998 178.675 26.4257 178.898 26.2012C179.122 25.9767 179.295 25.707 179.406 25.4101C179.516 25.1132 179.562 24.7961 179.54 24.48C179.556 24.1649 179.507 23.8498 179.397 23.554C179.287 23.2583 179.118 22.9881 178.9 22.76C178.672 22.5416 178.402 22.3715 178.106 22.2598C177.811 22.1481 177.496 22.0972 177.18 22.11H174.18Z" fill="#6C4A92"/>
<path d="M183.57 28.94L182.31 32H181L185.62 21H186.72L191.3 32H190.05L188.78 28.92L183.57 28.94ZM186.18 22.62L184 27.83H188.26L186.18 22.62Z" fill="#6C4A92"/>
<path d="M197.77 21C198.22 20.987 198.667 21.0644 199.086 21.2275C199.505 21.3907 199.888 21.6364 200.21 21.95C200.532 22.254 200.787 22.6217 200.959 23.0297C201.132 23.4378 201.217 23.8772 201.21 24.32C201.215 24.7616 201.134 25.1999 200.97 25.61C200.842 25.9509 200.648 26.2635 200.4 26.53C200.197 26.7393 199.972 26.9269 199.73 27.09C199.558 27.2237 199.366 27.3284 199.16 27.4L198.92 27.48L201.49 32H200.15L197.7 27.6H194.54V32H193.35V21H197.77ZM194.54 22.11V26.53H197.77C198.065 26.5449 198.36 26.4993 198.637 26.3961C198.914 26.293 199.167 26.1343 199.38 25.93C199.773 25.4857 199.99 24.9131 199.99 24.32C199.99 23.7269 199.773 23.1543 199.38 22.71C199.167 22.5057 198.914 22.347 198.637 22.2439C198.36 22.1407 198.065 22.0951 197.77 22.11H194.54Z" fill="#6C4A92"/>
<path d="M205.28 28.94L204 32H202.74L207.33 21H208.43L213 32H211.74L210.48 28.92L205.28 28.94ZM207.88 22.62L205.75 27.83H210L207.88 22.62Z" fill="#6C4A92"/>
<path d="M224.74 30.08C225.061 29.7685 225.314 29.3952 225.486 28.9826C225.658 28.5701 225.745 28.1269 225.74 27.68V21H226.92V27.72C226.92 28.9135 226.446 30.0581 225.602 30.902C224.758 31.7459 223.613 32.22 222.42 32.22C221.227 32.22 220.082 31.7459 219.238 30.902C218.394 30.0581 217.92 28.9135 217.92 27.72V21H219.1V27.72C219.095 28.167 219.181 28.6103 219.353 29.023C219.525 29.4356 219.779 29.8089 220.1 30.12C220.404 30.4333 220.768 30.6824 221.17 30.8525C221.572 31.0226 222.004 31.1102 222.44 31.1102C222.876 31.1102 223.308 31.0226 223.71 30.8525C224.112 30.6824 224.476 30.4333 224.78 30.12L224.74 30.08Z" fill="#6C4A92"/>
<path d="M235.66 28.86L231.25 23V32H230.06V21H231.06L235.64 27L240.22 21H241.22V32H240.04V23L235.66 28.86Z" fill="#6C4A92"/>
<path d="M254.38 21V22.11H250.9V32H249.72V22H246.24V21H254.38Z" fill="#6C4A92"/>
<path d="M264.08 30.92V32H256.34V21H263.92V22.11H257.53V25.7H262.66V26.81H257.53V30.92H264.08Z" fill="#6C4A92"/>
<path d="M272.05 28.86L267.63 23V32H266.45V21H267.45L272.03 27L276.61 21H277.61V32H276.43V23L272.05 28.86Z" fill="#6C4A92"/>
<path d="M285.16 21C285.629 20.9845 286.097 21.0653 286.533 21.2373C286.97 21.4092 287.367 21.6688 287.7 22C288.029 22.3196 288.288 22.7043 288.46 23.1296C288.633 23.5549 288.714 24.0114 288.7 24.47C288.712 24.9312 288.629 25.39 288.457 25.8182C288.285 26.2463 288.027 26.6349 287.7 26.96C287.365 27.2883 286.968 27.5461 286.532 27.7178C286.095 27.8896 285.629 27.972 285.16 27.96H282.16V32H281V21H285.16ZM282.16 22.11V26.85H285.16C285.789 26.85 286.391 26.6003 286.836 26.1558C287.28 25.7114 287.53 25.1086 287.53 24.48C287.53 23.8514 287.28 23.2486 286.836 22.8042C286.391 22.3597 285.789 22.11 285.16 22.11H282.16Z" fill="#6C4A92"/>
<path d="M300.23 30.51C299.437 31.3046 298.426 31.8464 297.325 32.0668C296.224 32.2872 295.083 32.1764 294.045 31.7483C293.007 31.3203 292.119 30.5943 291.493 29.6619C290.868 28.7296 290.533 27.6328 290.53 26.51C290.53 25.0036 291.128 23.5588 292.194 22.4936C293.259 21.4284 294.704 20.83 296.21 20.83C297.716 20.83 299.161 21.4284 300.226 22.4936C301.292 23.5588 301.89 25.0036 301.89 26.51C301.902 27.2549 301.761 27.9942 301.475 28.6823C301.19 29.3704 300.766 29.9925 300.23 30.51ZM293 29.75C293.851 30.5952 295.001 31.0695 296.2 31.0695C297.399 31.0695 298.549 30.5952 299.4 29.75C300.234 28.8696 300.699 27.7028 300.699 26.49C300.699 25.2772 300.234 24.1104 299.4 23.23C298.549 22.3848 297.399 21.9105 296.2 21.9105C295.001 21.9105 293.851 22.3848 293 23.23C292.166 24.1104 291.701 25.2772 291.701 26.49C291.701 27.7028 292.166 28.8696 293 29.75Z" fill="#6C4A92"/>
<path d="M180.73 49.87V51H173V39.91H180.58V41H174.19V44.63H179.32V45.74H174.19V49.85L180.73 49.87Z" fill="#6C4A92"/>
<path d="M189.65 39.91H191.06L187.28 45.2L191.38 50.97H190L186.61 46.15L183.17 51H181.75L185.85 45.23L182.07 39.94H183.49L186.57 44.29L189.65 39.91Z" fill="#6C4A92"/>
<path d="M197.54 39.91C198.011 39.8955 198.479 39.9767 198.918 40.1486C199.356 40.3205 199.755 40.5795 200.09 40.91C200.752 41.5736 201.124 42.4727 201.124 43.41C201.124 44.3473 200.752 45.2464 200.09 45.91C199.756 46.2393 199.359 46.4976 198.922 46.6694C198.486 46.8413 198.019 46.9231 197.55 46.91H194.55V51H193.36V39.91H197.54ZM194.54 41.02V45.76H197.54C198.169 45.76 198.771 45.5103 199.216 45.0658C199.66 44.6214 199.91 44.0186 199.91 43.39C199.91 42.7614 199.66 42.1586 199.216 41.7142C198.771 41.2697 198.169 41.02 197.54 41.02H194.54Z" fill="#6C4A92"/>
<path d="M212.62 49.46C211.687 50.4059 210.455 50.9983 209.134 51.1359C207.812 51.2735 206.484 50.9478 205.377 50.2144C204.269 49.4811 203.451 48.3857 203.062 47.1156C202.672 45.8456 202.736 44.4797 203.243 43.2517C203.75 42.0237 204.667 41.0098 205.839 40.3835C207.01 39.7572 208.363 39.5574 209.665 39.8183C210.968 40.0791 212.139 40.7844 212.979 41.8135C213.819 42.8426 214.275 44.1316 214.27 45.46C214.281 46.2038 214.14 46.9421 213.857 47.6297C213.573 48.3174 213.152 48.9402 212.62 49.46ZM205.39 48.7C206.241 49.5452 207.391 50.0195 208.59 50.0195C209.789 50.0195 210.939 49.5452 211.79 48.7C212.624 47.8196 213.089 46.6528 213.089 45.44C213.089 44.2272 212.624 43.0604 211.79 42.18C210.939 41.3348 209.789 40.8605 208.59 40.8605C207.391 40.8605 206.241 41.3348 205.39 42.18C204.556 43.0604 204.091 44.2272 204.091 45.44C204.091 46.6528 204.556 47.8196 205.39 48.7Z" fill="#6C4A92"/>
<path d="M225.88 39.91V51H224.88L218.1 42.08V51H216.91V39.91H217.91L224.7 48.84V39.91H225.88Z" fill="#6C4A92"/>
<path d="M236.94 49.87V51H229.19V39.91H236.77V41H230.38V44.63H235.51V45.74H230.38V49.85L236.94 49.87Z" fill="#6C4A92"/>
<path d="M248.29 39.91V51H247.29L240.5 42.08V51H239.3V39.91H240.3L247.09 48.84V39.91H248.29Z" fill="#6C4A92"/>
<path d="M252.56 41.41C253.079 40.8774 253.702 40.4564 254.39 40.1727C255.078 39.889 255.816 39.7485 256.56 39.76C257.105 39.7593 257.647 39.8368 258.17 39.99C258.621 40.1203 259.052 40.3121 259.45 40.56C259.763 40.7606 260.061 40.9845 260.34 41.23C260.54 41.4068 260.724 41.6009 260.89 41.81L261.07 42.05L260.27 42.76L260.13 42.55C259.793 42.1597 259.398 41.8226 258.96 41.55C258.647 41.356 258.311 41.2015 257.96 41.09C257.171 40.841 256.329 40.8128 255.525 41.0084C254.721 41.2041 253.986 41.6162 253.4 42.2C252.566 43.0804 252.101 44.2472 252.101 45.46C252.101 46.6728 252.566 47.8396 253.4 48.72C253.814 49.1483 254.312 49.4866 254.862 49.7137C255.413 49.9408 256.005 50.0519 256.6 50.04C257.061 50.0409 257.519 49.9735 257.96 49.84C258.339 49.7309 258.702 49.5729 259.04 49.37C259.32 49.18 259.57 49 259.79 48.82C259.96 48.6764 260.114 48.5155 260.25 48.34L260.4 48.14L261.18 48.86C261.123 48.9445 261.059 49.0247 260.99 49.1C260.813 49.2931 260.626 49.4767 260.43 49.65C260.141 49.9061 259.834 50.14 259.51 50.35C259.109 50.588 258.679 50.7729 258.23 50.9C257.702 51.0608 257.152 51.1417 256.6 51.14C255.477 51.1347 254.381 50.7974 253.45 50.1706C252.519 49.5438 251.793 48.6554 251.366 47.6173C250.938 46.5793 250.827 45.4379 251.047 44.3369C251.266 43.2359 251.807 42.2245 252.6 41.43L252.56 41.41Z" fill="#6C4A92"/>
<path d="M263.45 39.91H264.64V51H263.45V39.91Z" fill="#6C4A92"/>
<path d="M269.21 47.89L268 51H266.73L271.31 39.94H272.42L277 51H275.74L274.48 47.92L269.21 47.89ZM271.82 41.57L269.68 46.78H274L271.82 41.57Z" fill="#6C4A92"/>
<path d="M279 51V39.91H280.19V49.91H285.87V51H279Z" fill="#6C4A92"/>
</svg>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail ou código do aluno"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.loginInput}
          />
          <a href="#" className={styles.forgotPassword}>Esqueci a senha</a>
          <button type="submit" className={styles.loginButton}>Acessar</button>
        </form>
        <p className={styles.createAccountText}>
          Não possui conta? <span onClick={handleCreateAccount} className={styles.createAccountLink}>Crie agora mesmo.</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
