var parse5 = require('parse5');
var path = require('path');

module.exports = function(source) {
    var tree = parse5.parseFragment(source.trim());

    var rootNode = tree.childNodes[0];
    var compPath = this.resourcePath.replace(process.cwd(), '');

    rootNode.attrs = rootNode.attrs || [];
    rootNode.attrs.push({
        name : '__template_path', value : compPath,
    });

    appendSpecialAttrChildrenRecv(tree.childNodes[0], '0');



    return parse5.serialize(tree);
};


function appendSpecialAttrChildrenRecv(_node, _loc){
    var node = _node;
    var loc = _loc === undefined ? '0' : _loc;

    node.attrs = node.attrs || [];
    node.attrs.push({
        name : '__location', value : loc,
    });

    if( node.childNodes ){
        var index = 0;
        for(var i = 0; i < node.childNodes.length ; i++ ){
            node = node.childNodes[i];

            if( node.nodeName === '#comment' || node.nodeName === '#text' ){
                continue;
            }
            appendSpecialAttrChildrenRecv(node, loc + '.' + index);
            index++;
        }
    }
}
