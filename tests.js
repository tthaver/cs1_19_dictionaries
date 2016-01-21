$(document).ready(function() {

    var eq = function(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    var prettyArgs = function(input) {
        if (input.length == 1) {
            return input.toString();
        } else {
            return ( "(" + input.toString() + ")" );
        }
    };

    var prettyArray = function (input) {
        if (input == undefined) {
            return "()";
        } else if (Array.isArray(input)) {
            return ("[" + input.toString() + "]")
        } else {
            return input.toString()
        }
    };

    var test = function(id, f, input, output, desc) {
        if (typeof f != 'function') {
            return;  // student has not implemented
        }
        var got = f.apply(this, input);
        if (arguments.length == 4 ) {
            desc = prettyArgs(input) + " -> " + prettyArray(output);
        }
        if (!eq(got, output)) {
            desc += " (got: " + prettyArray(got) + ")";
        }
        var li = $("<li>" + desc + "</li>").appendTo(id);
        if (eq(got, output)) {
            li.addClass("right");
        } else {
            li.addClass("wrong");
        }
    };

    var test1 = function(id, f, input, output) {
        var desc = prettyArray(input) + " -> " + prettyArray(output);
        test(id, f, [input], output, desc);
    };

    test1("#showPerson", showPerson, {name: "Daniel Bergey", email: "dbergey@friendscentral.org"}, "Daniel Bergey <dbergey@friendscentral.org>");
    test1("#showPerson", showPerson, {name: "Colin Angevine", email: "cangevine@friendscentral.org"}, "Colin Angevine <cangevine@friendscentral.org>");

    test1("#showDate", showDate, {year: 2016, month: 01, day: 20, hour: 13, minute: 41, second: 0}, "2016-01-20T13:41:00");
    test1("#showDate", showDate, {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}, "1970-01-01T00:00:00");
    test1("showDate"), showDate, {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}, "1969-07-24T16:50:35");

    test("#compareInts", compareInts, [0,1], "LT");
    test("#compareInts", compareInts, [1,0], "GT");
    test("#compareInts", compareInts, [1,1], "EQ");
    test("#compareInts", compareInts, [0,0], "EQ");
    test("#compareInts", compareInts, [0, 100], "LT");
    test("#compareInts", compareInts, [100, 0], "GT");
    test("#compareInts", compareInts, [13, 37], "GT");

    // year
    test("#compareDates", compareDates,
         [ {year: 1910, month: 12, day: 31, hour: 23, minute: 59, second: 59}
        ,  {year: 1990, month: 1, day: 1, hour: 1, minute: 1, second, 1}], "LT");
    test("#compareDates", compareDates,
         [ {year: 1990, month: 1, day: 1, hour: 1, minute: 1, second, 1}
         , {year: 1910, month: 12, day: 31, hour: 23, minute: 59, second: 59}]
       , "GT");
    // month
    test("#compareDates", compareDates,
         [ {year: 2016, month: 1, day: 31, hour: 12, minute: 30, second: 30}
         , {year: 2016, month: 8, day: 1, hour: 1, minute: 1, second: 1}]
       , "LT");
    test("#compareDates", compareDates,
         [{year: 2016, month: 8, day: 1, hour: 1, minute: 1, second: 1}
       ,  {year: 2016, month: 1, day: 31, hour: 12, minute: 30, second: 30}]
       , "GT");
    // day
    test("#compareDates", compareDates,
         [  {year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}
          , { year: 2016, month: 1, day: 30, hour: 12, minute: 30, second: 30}]
       , "LT");
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 30, hour: 12, minute: 30, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}]
       , "GT");
    // hour
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 10, minute: 30, second: 30}]
       , "LT");
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 10, minute: 30, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}]
       , "GT");
    // minute
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 12, minute: 0, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}]
       , "GT");
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 12, minute: 20, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 10, second: 30}]
       , "LT");
    // equal
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 12, minute: 10, second: 0}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 10, second: 0}]
       , "EQ");

    test("#elementOf", elementOf, ["CSS", [ "HTML", "CSS", "Javascript"]], true);
    test("#elementOf", elementOf, ["Haskell", [ "HTML", "CSS", "Javascript"]], false);
    test("#elementOf", elementOf, ["snake", [ "puma", "lynx", "tiger"]], false);
    test("#elementOf", elementOf, ["Ardmore", ["Narberth", "Wynnewood", "Ardmore"]], true);

    test("#hasTag", hasTag, ["CS1", {sender: "Bergey", subject: "test",
                                     tags: ["CS1", "urgent", "todo"]}], true);
    test("#hasTag", hasTag, ["CS1"], {sender: "Bergey", subject: "test",
                                      tags: ["English", "homework", "starred"]}, false);
    test("#hasTag", hasTag, ["draft"], {sender: "Bergey", subject: "test",
                                        tags: ["CS1", "homework", "read"]}, false);
    test("#hasTag", hasTag, ["starred"], {sender: "Bergey", subject: "test",
                                          tags: ["CS1", "urgent", "starred"]}, true);

    var emails =
    [ {sender: "Bergey", subject: "catamorphisms", tags: ["CS1", "urgent", "todo"]}
    , {sender: "BC", subject: "engagement", tags: ["urgent", "homework", "starred"]}
    , {sender: "Bergey", subject: "proof terms", tags: ["CS1", "homework", "read"]}
    , {sender: "Weisgrau", subject: "design", tags: ["todo", "urgent", "starred"]}
    ]

    test("#filterByTag", filterByTag, ["CS1", emails],
         [ {sender: "Bergey", subject: "catamorphisms", tags: ["CS1", "urgent", "todo"]}
         , {sender: "Bergey", subject: "proof terms", tags: ["CS1", "homework", "read"]}
         ]
    );
    test("#filterByTag", filterByTag, ["urgent", emails],
         [ {sender: "Bergey", subject: "catamorphisms", tags: ["CS1", "urgent", "todo"]}
         , {sender: "BC", subject: "engagement", tags: ["urgent", "homework", "starred"]}
         , {sender: "Weisgrau", subject: "design", tags: ["todo", "urgent", "starred"]}]
    );
    test("#filterByTag", filterByTag, ["homework", emails],
         [ {sender: "BC", subject: "engagement", tags: ["urgent", "homework", "starred"]}
         , {sender: "Bergey", subject: "proof terms", tags: ["CS1", "homework", "read"]}
         ]
    );
    test("#filterByTag", filterByTag, ["starred", emails],
         [ {sender: "BC", subject: "engagement", tags: ["urgent", "homework", "starred"]}
         , {sender: "Weisgrau", subject: "design", tags: ["todo", "urgent", "starred"]}]
    );

    test("#parseYear", parseYear, "1970", 1970);
    test("#parseYear", parseYear, "2016", 2016);
    test("#parseYear", parseYear, "1999", 1999);

    test("#parseDate", parseDate, "2016-01-20T13:41:00", {year: 2016, month: 01, day: 20, hour: 13, minute: 41, second: 0});
    test("#parseDate", parseDate, "1970-01-01T00:00:00", {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0});

    test("#parseDate", parseDate, "1969-07-24T16:50:35", {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35});

    test("#inSubject", inSubject, ["cat", emails[0]], true);
    test("#inSubject", inSubject, ["cat", emails[1]], false);
    test("#inSubject", inSubject, ["proof", emails[2]], true);
    test("#inSubject", inSubject, ["proof", emails[3]], false);

    test("#filterBySubject", filterBySubject, ["a", emails], [emails[0], emails[1]]);
    test("#filterBySubject", filterBySubject, ["g", emails], [emails[1], emails[3]]);
    test("#filterBySubject", filterBySubject, ["p", emails], [emails[0], emails[2]]);
    test("#filterBySubject", filterBySubject, ["q", emails], []);

    var bodies =
    [ {sender: "BC", body: "Two things that I wrote recently that might be worth adding to the
   conversation:

   Why and how, not just what
   <http://blog.projectignite.autodesk.com/2015/10/06/why-and-how-not-just-what/>
   (a dip-your-toes-in primer I wrote for Autodesk's Project Ignite blog)
   Situating makerspaces in schools
   <http://www.hybridpedagogy.com/journal/situating-makerspaces-in-schools/>
   (a more provocative, in-depth essay my colleague, Josh Weisgrau, and I
   wrote for Hybrid Pedagogy)

   Here's hoping something there might be useful for you!
   Colin"}
    , {sender: "Weisgrau", body: " This is the cart that I designed and built to supplement our makerspace
 when we have too many projects going at once.
 It has lots of swappable storage, a built in desk for a laptop and cameo
 cutter, and the cover can be used as a workbench.

 Here's a link to an instructable if you want to make your own.
 <http://www.instructables.com/id/Maker-Cart/>

 <https://lh3.googleusercontent.com/-LDzGUDjzVpU/VmTkXFE3OqI/AAAAAAAADgQ/WegkQatWgtU/s1600/IMG_20151029_124541179.jpg>
 <https://lh3.googleusercontent.com/-sUsNUWFPGRA/VmTj-o77HqI/AAAAAAAADgA/s-JXOiZ1sk0/s1600/IMG_7310.JPG>
 <https://lh3.googleusercontent.com/-cBK_m94PkBQ/VmTkGef-dII/AAAAAAAADgI/WIxmCAbWQro/s1600/IMG_7311.JPG>"}
    ]

    test("#inBody", inBody, ["pedagogy", bodies[0]], true);
    test("#inBody", inBody, ["pedagogy", bodies[1]], false);
    test("#inBody", inBody, ["cart", bodies[0]], false);
    test("#inBody", inBody, ["cart", bodies[1]], true);
    test("#inBody", inBody, ["maker", bodies[0]], true);
    test("#inBody", inBody, ["maker", bodies[1]], true);

    test("#filterByBody", filterByBody, ["pedagogy", bodies], [bodies[0]]);
    test("#filterByBody", filterByBody, ["cart", bodies], [bodies[2]]);
    test("#filterByBody", filterByBody, ["maker", bodies], bodies);
