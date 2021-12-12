module.exports = function serviceWorkerRemoverPlugin(context, options) {
  return {
    name: 'service-worker-plugin',
    injectHtmlTags({ content }) {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
            (() => {
              if(window.navigator && navigator.serviceWorker) {
                navigator.serviceWorker.getRegistrations()
                .then(function(registrations) {
                  for(let registration of registrations) {
                    console.log("Unregistering outdated service worker, because this site no longer uses service workers.")
                    registration.unregister();
                  }
                });
              }
            })()
            `,
          },
        ],
      }
    }
  }
}