<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!doctype html>
<html lang="zh_CN">
<head>
<base href="<%=basePath%>" />
<title>${title }</title>

</head>

<body>
	<jsp:include page="header.jsp"></jsp:include>
	<div class="block box">
		<div class="blank"></div>
		<div id="ur_here">
			当前位置: <a href=".">首页</a>
			<code> &gt; </code>
			用户中心
			<code> &gt; </code>
			我的消费
		</div>
	</div>
	<div class="blank"></div>

	<div class="blank"></div>
	<div class="block clearfix">

		<div class="AreaL">
			<div class="box">
				<div class="box_1">
					<div class="userCenterBox">
						<jsp:include page="usermenu.jsp"></jsp:include>
					</div>
				</div>
			</div>
		</div>


		<div class="AreaR">
			<div class="box">
				<div class="box_1">
					<div class="userCenterBox boxCenterList clearfix" style="_height: 1%;">
						<h5>
							<span>我的消费</span>
						</h5>
						<div class="blank"></div>
						<table width="100%" border="0" cellpadding="5" cellspacing="1" bgcolor="#dddddd">
							<tr>
								<th align="center" bgcolor="#ebf0f7">用户</th>
								<th align="center" bgcolor="#ebf0f7">书籍</th>
								<th align="center" bgcolor="#ebf0f7">章节</th>
								<th align="center" bgcolor="#ebf0f7">金额</th>
								<th align="center" bgcolor="#ebf0f7">日期</th>
							</tr>
							<c:forEach items="${paysList}" var="pays">
								<tr align="center" bgcolor="#FFFFFF">
									<td align="center">${pays.username}</td>
									<td align="center">${pays.booksname}</td>
									<td align="center">${pays.title}</td>
									<td align="center">${pays.money}</td>
									<td align="center">${pays.addtime}</td>
								</tr>
							</c:forEach>
						</table>
						<div class="blank5"></div>
						${html }
					</div>
				</div>
			</div>
		</div>

	</div>
	<div class="blank"></div>



	<jsp:include page="footer.jsp"></jsp:include>
</body>
</html>
