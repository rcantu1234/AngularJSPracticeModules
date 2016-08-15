var filter;
(function (filter) {
    angular.module("filter", []);
    var HomeController = (function () {
        function HomeController() {
            this.items = ["hello", "world", "hello", "should", "should", "should", "make", "hello", "sense"];
        }
        return HomeController;
    }());
    angular.module("filter").controller("HomeController", HomeController);
})(filter || (filter = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsTUFBTSxDQVF1RDtBQVJ2RSxXQUFVLE1BQU0sRUFBQyxDQUFDO0lBRWhCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTdCO1FBQUE7WUFDUyxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JHLENBQUM7UUFBRCxxQkFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFDdkUsQ0FBQyxBQURzRSxFQVI3RCxNQUFNLEtBQU4sTUFBTSxRQVF1RCIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBmaWx0ZXIge1xuXG4gIGFuZ3VsYXIubW9kdWxlKFwiZmlsdGVyXCIsIFtdKTtcblxuICBjbGFzcyBIb21lQ29udHJvbGxlciB7XG4gICAgcHVibGljIGl0ZW1zID0gW1wiaGVsbG9cIiwgXCJ3b3JsZFwiLCBcImhlbGxvXCIsIFwic2hvdWxkXCIsIFwic2hvdWxkXCIsIFwic2hvdWxkXCIsIFwibWFrZVwiLCBcImhlbGxvXCIsIFwic2Vuc2VcIl07XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShcImZpbHRlclwiKS5jb250cm9sbGVyKFwiSG9tZUNvbnRyb2xsZXJcIiwgSG9tZUNvbnRyb2xsZXIpXG4iXX0=