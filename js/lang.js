/* 网站支持的语言种类 */
const webLanguage = ['zh','en', 'jp']

/* i18nLanguage = "tw" 设置默认繁体 */
const i18nExecute = (i18nLanguage = "zh")=>{
  if ($.i18n == undefined) return false
  $.i18n.properties({
    name: "lang", //资源文件名称
    path: './lang/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: i18nLanguage,
    callback: function () {
      /* 替换普通文本 */
      $("[i18n]").each(function () {
        $(this).html($.i18n.prop($(this).attr("i18n")))
      })
      /* 替换value属性 */
      $("[i18n-v]").each(function () {
        $(this).val($.i18n.prop($(this).attr("i18n-v")))
      })
      /* 替换placeholder属性 */
      $("[i18n-p]").each(function () {
        $(this).attr("placeholder", $.i18n.prop($(this).attr("i18n-p")))
      })
    }
  });
}

/* 获取文本 */
const i18nProp = function (value) {
  if ($.i18n == undefined) return false
  return $.i18n.prop(value)
}

$(function(){
  i18nExecute()
})

