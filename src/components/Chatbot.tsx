export function Chatbot() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(){
            if(!window.chatbase || window.chatbase("getState") !== "initialized") {
              window.chatbase = (...arguments) => {
                if(!window.chatbase.q) {
                  window.chatbase.q = []
                }
                window.chatbase.q.push(arguments)
              };
              window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                  if(prop === "q") {
                    return target.q
                  }
                  return (...args) => target(prop, ...args)
                }
              })
            }
            const onLoad = function() {
              const script = document.createElement("script");
              script.src = "https://www.chatbase.co/embed.min.js";
              script.id = "dp8smV4FNTxui62zTSniY";
              script.domain = "www.chatbase.co";
              document.body.appendChild(script);
            };
            if(document.readyState === "complete") {
              onLoad()
            } else {
              window.addEventListener("load", onLoad)
            }
          })();
        `,
      }}
    />
  );
}
