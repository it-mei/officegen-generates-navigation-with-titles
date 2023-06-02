let officegen = require("officegen");
let fs = require("fs");
let styleXML = fs.readFileSync("./utils/styles.xml", "utf-8");
let docx = officegen({
    type: "docx",
    title:"文档一",
    styleXML,
});
let style = { bold: true, font_face: "楷体", font_size: 20,align:'left' };


let pObj1 = docx.createP()
pObj1.options.force_style = "myHeading1";
pObj1.addText(`一级标题`,style)

docx.putPageBreak();

let pObj2 = docx.createP()
pObj2.options.force_style = "myHeading2";
pObj2.addText(`二级标题`,style)
docx.putPageBreak();

let pObj3 = docx.createP()
pObj3.options.force_style = "myHeading3";
pObj3.addText(`三级标题`,style)
docx.putPageBreak();

//  将 docx 数据写入到文件
let out = fs.createWriteStream("./out/data.docx");
out.on("error", function (err) {
    console.log(err);
});
docx.generate(out);
