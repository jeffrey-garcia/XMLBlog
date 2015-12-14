<?xml version="1.0" encoding="Big5"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">


<html>

<head>
	<title>Jeffrey's Blog</title>

	<script type="text/javascript" src="script.js"></script>

	<style>
	.text_0{
		font-family:Arial;
		font-size:24px;
		color:#FFFF00;
	}
	.text_1{
		font-family:Arial;
		font-size:12px;
		color:#00FF00;
	}
	.text_2{
		font-family:Arial;
		font-size:14px;
		color:#00FFFF;
	}
	.text_3{
		font-family:Arial;
		font-size:14px;
		color:#FF33CC;
	}
	.text_4{
		font-family:Arial;
		font-size:14px;
		color:#FFFF00;
	}
	.text_5{
		font-family:Arial;
		font-size:16px;
		color:#FFFFFF;
	}
	</style>
</head>


<body bgcolor="#000000">

	<font color="#FFFFFF" face="Verdana">
		<center>
			<xsl:call-template name="showBlogInfo">
				<xsl:with-param name="object" select="/blog"/>
			</xsl:call-template>
		</center>

		<br/><hr color="#C0C0C0"></hr><br/>

		<table width="100%" border="0" bordercolor="#333333" cellpadding="0" cellspacing="0">
			<xsl:call-template name="showBlogItem">
				<xsl:with-param name="object" select="/blog/post"/>
			</xsl:call-template>
		</table>
	</font>
</body>

</html>
</xsl:template>


<xsl:template name="showBlogInfo">
	<xsl:param name="object" select="/blog"/>
	<xsl:for-each select="$object">
		<table>
			<tr>
				<td valign="center" align="center" width="100">
					<img src="http://www.unisa.edu.au/commonfiles/images/unisa.gif" align="absmiddle"/>
				</td>

				<td>
					<span class="text_0"><b><xsl:value-of select="title"/></b></span><br/>
					<span class="text_5">
					<b>
						<xsl:value-of select="author"/> (<xsl:value-of select="country"/>)<br/>
						<xsl:value-of select="company"/><br/>
						<xsl:value-of select="shortdescription"/> - <xsl:value-of select="year"/><br/>
					</b>
					</span>
				</td>
			</tr>
		</table>
	</xsl:for-each>
</xsl:template>

<xsl:template name="showBlogItem">
	<xsl:param name="object" select="/blog/post"/>
	<xsl:for-each select="$object">
		<xsl:variable name="postTitle">

			<xsl:value-of select="posttitle" />

		</xsl:variable>


		<tr>
			<td class="text_3" halign="left" valign="top">
				<a name="{$postTitle}"></a>
				<b><xsl:value-of select="posttitle"/></b>
			</td>
			<td class="text_2" align="right" valign="top">
				<b><xsl:value-of select="postdate"/></b>
			</td>
		</tr>

		<tr>
			<td class="text_1" colspan="2" align="left">
				<br/>
				<xsl:value-of select="postbody"/>
				<br/>
			</td>
		</tr>

		<tr>
			<td class="text_1" colspan="2" align="left">				
				<br/>
				<a href="#{$postTitle}" onclick="javascript:viewComment('{$postTitle}')" class="text_4">
					Read Comments
				</a>
				<br/><br/><hr color="#333333"/><br/>
			</td>
		</tr>
	</xsl:for-each>
</xsl:template>

</xsl:stylesheet>
