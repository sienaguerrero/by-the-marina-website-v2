import React from "react";

type KofiButtonProps = {
  title;
  color;
  kofiID;
  textColor;
};

function KofiButton(props: KofiButtonProps) {
  const { title, color, textColor, kofiID } = props;
  const kofiwidget = () => {
    var style = "";
    var html = "";
    var color = "";
    var textColor = "";
    var text = "";
    var id = "";
    return {
      init: function (pText, pColor, pId, pTextColor) {
        color = pColor;
        textColor = pTextColor;
        text = pText;
        id = pId;

        const rawStyling =
          "img.kofiimg{display: initial!important;vertical-align:middle;height:13px!important;width:20px!important;padding-top:0!important;padding-bottom:0!important;border:none;margin-top:0;margin-right:5px!important;margin-left:0!important;margin-bottom:3px!important;content:url('https://storage.ko-fi.com/cdn/cup-border.png')}.kofiimg:after{vertical-align:middle;height:25px;padding-top:0;padding-bottom:0;border:none;margin-top:0;margin-right:6px;margin-left:0;margin-bottom:4px!important;content:url('https://storage.ko-fi.com/cdn/whitelogo.svg')}.btn-container{display:inline-block!important;white-space:nowrap;min-width:160px}span.kofitext{color:[textColor] !important;letter-spacing: -0.15px!important;text-wrap:none;vertical-align:middle;line-height:33px !important;padding:0;text-align:center;text-decoration:none!important; text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);}.kofitext a{color:#fff !important;text-decoration:none:important;}.kofitext a:hover{color:#fff !important;text-decoration:none}a.kofi-button{box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);line-height:36px!important;min-width:150px;display:inline-block!important;background-color:#29abe0;padding:2px 12px !important;text-align:center !important;border-radius:7px;color:[textColor];cursor:pointer;overflow-wrap:break-word;vertical-align:middle;border:0 none #fff !important;font-family:'Quicksand',Helvetica,Century Gothic,sans-serif !important;text-decoration:none;text-shadow:none;font-weight:700!important;font-size:14px !important}a.kofi-button:visited{color:[textColor] !important;text-decoration:none !important}a.kofi-button:hover{opacity:.85;color:[textColor] !important;text-decoration:none !important}a.kofi-button:active{color:[textColor] !important;text-decoration:none !important}.kofitext img.kofiimg {height:15px!important;width:22px!important;display: initial;animation: kofi-wiggle 3s infinite;}";
        const kofiWigglingIcon =
          "@keyframes kofi-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}";
        style = "<style>" + rawStyling + kofiWigglingIcon + "</style>";
        const fonthtml =
          "<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
        const ButtonWrapperHtml =
          '<div class=btn-container><a title="Support me on ko-fi.com" class="kofi-button" style="background-color:[color];" href="https://ko-fi.com/[id]" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg"/>[text]</span></a></div>';

        html = fonthtml + ButtonWrapperHtml;
      },
      getHTML: function () {
        var rtn =
          style.replace("[textColor]", textColor) +
          html
            .replace("[color]", color)
            .replace("[text]", text)
            .replace("[id]", id);

        return rtn;
      },
      draw: function () {
        document.writeln(
          style.replace("[textColor]", textColor) +
            html
              .replace("[color]", color)
              .replace("[text]", text)
              .replace("[id]", id)
        );
      },
    };
  };

  const KofiWidget = kofiwidget();

  KofiWidget.init(title, color, kofiID, textColor);

  return React.createElement(
    "div",
    { dangerouslySetInnerHTML: { __html: KofiWidget.getHTML() } },
    null
  );
}

export default KofiButton;
