function viewComment(postTitle) {
	var commentsWindow = window.open('','Comments',status=1,toolbar=0,resizable=1,width=400,height=280);
	commentsWindow.moveTo(0,0)

	// The following lines shows that how IE built-in DOM parser applies to an XML file
	var xml_doc = new ActiveXObject("Microsoft.XMLDOM");
	xml_doc.async = false;
	xml_doc.load("blog.xml");

	var comments = xml_doc.getElementsByTagName("comments")

	if (comments.length == 0) {
		commentsWindow.close()
		alert ("This post has no comment!")

	} else {
		commentsWindow.document.write("<html>\n")
		commentsWindow.document.write("<head>\n")
		commentsWindow.document.write("<style>\n")
		commentsWindow.document.write(" .text_1{font-family:Arial;font-size:18px;color:#FF33CC;}\n")
		commentsWindow.document.write(" .text_2{font-family:Arial;font-size:22px;color:#FFFFFF;}\n")
		commentsWindow.document.write(" .text_3{font-family:Arial;font-size:14px;color:#FFFF00;}\n")
		commentsWindow.document.write(" .text_4{font-family:Arial;font-size:12px;color:#00FF00;}\n")
		commentsWindow.document.write(" .text_5{font-family:Arial;font-size:16px;color:#00FFFF;}\n")
		commentsWindow.document.write("</style>\n")
		commentsWindow.document.write("</head>\n")
		commentsWindow.document.write("\n")
		commentsWindow.document.write("<body bgcolor='#000000' onBlur='document.focus()'>\n")

		// The following lines will go through each comments element and write 
		// the text to the popup window in a table like format
		for(i=0;i<comments.length;i++) {
			/*** Only choose the comments from the selected link ***/
			if(postTitle == comments[i].parentNode.childNodes[1].text) {
				commentsWindow.document.write("<b><span class='text_2'>Comments on - </span><span class='text_1'>" + postTitle + "</span></span></b>\n");
				commentsWindow.document.write("<br/><br/>\n")

				var postBy = ""
				var postDate = ""
				var postMessage = ""

				for(j=0;j<comments[i].childNodes.length;j++) {
					for(k=0;k<comments[i].childNodes[j].childNodes.length;k++) {
						if (k == 0) {
							postMessage = comments[i].childNodes[j].childNodes[k].text	
						} else if (k == 1) {
							postBy = comments[i].childNodes[j].childNodes[k].text
						} else if (k == 2) {
							postDate = comments[i].childNodes[j].childNodes[k].text
						}
					}

					commentsWindow.document.write("<table border='0'>\n")
						commentsWindow.document.write("<tr>\n")
							commentsWindow.document.write("<td>\n")
								commentsWindow.document.write("<br/><span class='text_5'><b>" + postBy + " said ...</b></span>\n")
							commentsWindow.document.write("</td>\n")
						commentsWindow.document.write("</tr>\n")
						commentsWindow.document.write("<tr>\n")
							commentsWindow.document.write("<td>\n")
								commentsWindow.document.write("<br/><span class='text_4'>" + postMessage + "</span>\n")
							commentsWindow.document.write("</td>\n")
						commentsWindow.document.write("</tr>\n")
						commentsWindow.document.write("<tr>\n")
							commentsWindow.document.write("<td>\n")
								commentsWindow.document.write("<br/><span class='text_3'><i>" + postDate + "</i></span><br/>\n")
							commentsWindow.document.write("</td>\n")
						commentsWindow.document.write("</tr>\n")
					commentsWindow.document.write("</table>\n")
					commentsWindow.document.write("<hr color='#333333'/>\n")
				}
			}
		}

		commentsWindow.document.write("</body>\n")
		commentsWindow.document.write("</html>\n")
		commentsWindow.document.close();
	}
}