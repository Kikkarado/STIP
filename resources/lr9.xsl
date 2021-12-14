<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:'Open Sans', sans-serif;font-size:14pt; display: inline-block;">
<xsl:for-each select="subscription/edition">
	<xsl:sort select="price" order="descending"/>
	<div style="background-color:#84cc16;padding:4px; color:#27272a;">
		<span style="font-weight:bold"><xsl:value-of select="type-edition"/> - </span>
		"<xsl:value-of select="publication-name"/>"
	</div>
	<div style="margin-left:20px;margin-bottom:1em;font-size:12pt; color:#d4d4d8; ">
		<p>Тематика: <span style="font-weight: bold; font-style: italic;"><xsl:value-of select="subjects"/></span></p>
		<p>Периодичность: <span style="font-weight: bold; font-style: italic;"><xsl:value-of select="periodicity"/></span></p>
		<p>Цена: <span style="font-weight: bold; font-style: italic;"><xsl:value-of select="price"/></span></p>
		<p>Индекс: <span style="font-weight: bold; font-style: italic;"><xsl:value-of select="index"/></span></p>
	</div>
</xsl:for-each>
</body>
</html>