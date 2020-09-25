import axios from 'axios';

export default class ApiService {
  static axi = axios.create();

  //---------------------------------------------------------------------------
  // Initialization

  static requestInterceptor = null;

  static responseInterceptor = null;

  static init(/* unauthCallback */) {
    // Add a request interceptor
    ApiService.requestInterceptor = ApiService.axi.interceptors.request.use(
      config => {
        // const url = config.url;
        //
        // if (something) {
        //   // Disable the following rule because need to update request data
        //   /* eslint-disable-next-line no-param-reassign */
        //   config.data = {
        //     ...config.data,
        //     ...something,
        //   };
        // }

        return config;
      },
    );

    // Add a response interceptor
    ApiService.responseInterceptor = ApiService.axi.interceptors.response.use(
      response => {
        // if (not authorized here or in the error handler) {
        //   const {data} = response;
        //   const {
        //     extract some data
        //   } = data;
        //
        //   if (INVALID_SESSION) {
        //     unauthCallback();
        //   }
        //
        //   throw normalizedError;
        // }

        return response;
      },
    );
  }

  static uninit() {
    if (ApiService.requestInterceptor) {
      ApiService.axi.interceptors.request.eject(ApiService.requestInterceptor);
      ApiService.requestInterceptor = null;
    }

    if (ApiService.responseInterceptor) {
      ApiService.axi.interceptors.response.eject(
        ApiService.responseInterceptor,
      );
      ApiService.responseInterceptor = null;
    }

    // AZA:
    // Looks like the ejects above do not work.
    // So, recreate axios instance from scratch.
    ApiService.axi = axios.create();
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Auth

  static async login(username, password) {
    const response = await ApiService.axi
      .post('/login', {
        login: username,
        password,
      });

    // Get something from the response's data or headers
    // Store it in ApiService if necessary for later usage here
  }

  static logout() {
  }

  //= =======================================
  // Request cancellation

  static createCancelToken() {
    const CancelToken = axios.CancelToken;

    return CancelToken.source();
  }

  static isRequestCancelled(error) {
    return axios.isCancel(error);
  }

  // Request cancellation
  //= =======================================

}