<%--
  Created by IntelliJ IDEA.
  User: anastasia
  Date: 10.10.2019
  Time: 23:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Sign Up</title>
</head>
<style>
    body {
        background: aquamarine;
    }
    section {
        background: darkcyan;
        color: white;
        border-radius: 1em;
        padding: 1em;
        font-family: sans-serif;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%,-50%);
    }
    div {
        font-size: 60px;
    }
    p {
        font-size: 40px;
    }
</style>
<body>
<section>
    <div align="center">
        <div>
            Sign up
        </div>
        <form action="${pageContext.request.contextPath}/sign_up" method="POST">
            <label>
                <input type="text" name="username" placeholder="enter your login"/>
            </label>
            <label>
                <input type="password" name="password" placeholder="enter your password" />
            </label>
            <input type="submit" name="Go!" />
        </form>

        <div>You already have account, haven't you?<a href="${pageContext.request.contextPath}/sign_in"><i>Sign in</i> </div>
    </div>
</section>

</body>
</html>
