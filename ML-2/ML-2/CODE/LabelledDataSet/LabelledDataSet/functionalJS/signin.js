var signinbox = {
    logCount: 0,
    doingLogin: false,
    inputFocused: false,
    containerWidth: 889,
    show: function() {
        if (navigator.userAgent) {
            if (navigator.userAgent.match(/PLAYSTATION/)) {
                document.location.assign("http://" + location.hostname + "/login");
                return false
            }
        }
        if (!$j("#signinModal").is(":visible") && $j("a#headerLoginLink")[0]) {
            modal.show("signinModal", - 1, function() {
                $j("input.js-signinUsernameModal").focus()
            })
        }
    },
    hide: function() {
        modal.hide("signinModal");
        $j(".signinError").hide();
        $j("input.js-signinUsernameModal").val("");
        $j("input#.js-signinPasswordModal").val("");
        $j("input#js-redirect").val("")
    }
};
$j(document).ready(function(a) {
    if ($j("#signinModal")[0]) {
        $j(document).on("focus", "#signinModal input", function() {
            signinbox.inputFocused = true
        });
        $j(document).on("blur", "#signinModal input", function() {
            signinbox.inputFocused = false
        });
        $j(document).on("click", ".js-loginSubmitModal", function(b) {
            b.preventDefault();
            loginAjaxModal()
        });
        $j(document).on("keypress", "input.js-signinUsernameModal", function(b) {
            if (b.which == 13) {
                loginAjaxModal()
            }
        });
        $j(document).on("keypress", "input.js-signinPasswordModal", function(b) {
            if (b.which == 13) {
                loginAjaxModal()
            }
        });
        if (document.location.search.match(/showSigninBox=true/i) && $j("a#headerLoginLink")[0]) {
            signinbox.show()
        }
    }
});
function loginAjaxModal() {
    $j.ajax({
        type: "POST",
        url: "/front/login_json",
        cache: false,
        dataType: "json",
        data: $j(".js-loginFormModal").serialize(),
        success: function(a) {
            if (a.redirect) {
                $j("#signinLoggingin").show();
                $j(".signinError").hide();
                document.location.assign(a.redirect)
            } else {
                $j(".signinError").show().text(a.message)
            }
        },
        error: function() {
            location.reload()
        }
    });
    return false
};
