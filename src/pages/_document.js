import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="../assets/css/lib/all.min.css" />
        <link rel="stylesheet" href="../assets/css/lib/animate.css" />
        <link rel="stylesheet" href="../assets/css/lib/jquery.fancybox.css" />
        <link rel="stylesheet" href="../assets/css/lib/lity.css" />
        <link rel="stylesheet" href="../assets/css/lib/swiper.min.css" />
        <link rel="stylesheet" href="../cdn.jsdelivr.net/npm/bootstrap-icons%401.7.2/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="assets/css/lib/bootstrap.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/lib/jquery-3.0.0.min.js"></script>
        <script src="/assets/js/lib/jquery-migrate-3.0.0.min.js"></script>
        <script src="/assets/js/lib/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/lib/wow.min.js"></script>
        <script src="/assets/js/lib/jquery.fancybox.js"></script>
        <script src="/assets/js/lib/lity.js"></script>
        <script src="/assets/js/lib/swiper.min.js"></script>
        <script src="/assets/js/lib/jquery.waypoints.min.js"></script>
        <script src="/assets/js/lib/jquery.counterup.js"></script>
        <script src="/assets/js/lib/pace.js"></script>
        <script src="/assets/landing-preview/js/countdown.js"></script>
        <script src="/assets/js/lib/scrollIt.min.js"></script>
        <script src="/assets/js/demo.js"></script>
      </body>
    </Html>
  )
}
