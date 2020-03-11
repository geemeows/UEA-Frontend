<template>
  <footer class="footer">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">Upper Egypt in Action 2020!</h3>
          <h4 class="mb-0 font-weight-light">Illuminate The Darkness.</h4>
          <div class="container">
            <div class="row row-grid align-items-center">
              <div class="col-md-12 order-md-1">
                <div class="pr-md-5">
                  <ul class="list-unstyled mt-2">
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <badge type="primary" circle class="mr-3" icon="ni ni-pin-3"></badge>
                        <h6 class="mb-0">Tolip Hotel, Aswan City, Egypt</h6>
                      </div>
                    </li>
                    <li class="py-2">
                      <div class="d-flex align-items-center">
                        <badge type="primary" circle class="mr-3" icon="ni ni-calendar-grid-58"></badge>
                        <h6 class="mb-0">
                          16
                          <sup>th</sup> - 18
                          <sup>th</sup> Apr, 2020
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <a
            target="_blank"
            rel="noopener"
            href="https://twitter.com/"
            class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-twitter"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/"
            class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Like us"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://youtube.com"
            class="btn btn-neutral btn-icon-only btn-youtube btn-lg btn-round"
            data-toggle="tooltip"
            data-original-title="Follow us"
          >
            <i class="fa fa-youtube"></i>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://instagram.com/"
            class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg"
            data-toggle="tooltip"
            data-original-title="Star on Github"
          >
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{year}}
            <a
              href="https://www.facebook.com/events/547556652595539"
              target="_blank"
              rel="noopener"
            >Upper Egypt in Action</a> &
            <a
              href="https://www.facebook.com/IEEEAswanSB"
              target="_blank"
              rel="noopener"
            >IEEE Aswan Student Branch</a>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <span>Powered and developed by YouDev software lab</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
