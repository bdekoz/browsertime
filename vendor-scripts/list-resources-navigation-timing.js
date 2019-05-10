'use strict';

module.exports = async function(context, commands) {

    // https://www.theguardian.com/world/all
    // https://www.instagram.com/justintimberlake/
    // https://www.pinterest.com/legrandna/modern-design/
    // let url = 'https://www.pinterest.com/legrandna/modern-design/';

    let url = context.options.browsertime.url;
    context.log.info("Dump Page " + url);
    await commands.navigate(url);

    context.log.info("Dump Page Resources START");

    const resultstr = await commands.js.run('var cr = "\\n"; var retstring = "Resource Timing Length ";var resources = performance.getEntriesByType("resource"); retstring += resources.length; retstring += cr + cr; for (var i=0; i < resources.length; i++) { var tmpstring = "resource[" + i + "] is "; tmpstring += cr; var t = (resources[i].startTime > 0) ? (resources[i].responseEnd - resources[i].startTime) : "0"; tmpstring += t; tmpstring += cr; tmpstring += resources[i].name; tmpstring += cr; retstring += tmpstring; retstring += cr; }; return retstring;');

    context.log.info(resultstr);
    context.log.info('Dump Page Resources END');

    return true;
};
