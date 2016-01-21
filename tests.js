$(document).ready(function() {

    var eq = function(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length != b.length) return false;

            for (var i = 0; i < a.length; ++i) {
                if ( ! eq(a[i],b[i])) return false;
            }
            return true;
        } else if (typeof a == 'object' && typeof b == 'object' ) {
            return JSON.stringify(a) == JSON.stringify(b);
        } else {
            return false;
        }
    };

    var prettyArgs = function(input) {
        var s = JSON.stringify(input)
        return '(' + s.substring(1,s.length -1) + ')';
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
            desc = prettyArgs(input) + " -> " + JSON.stringify(output);
        }
        if (!eq(got, output)) {
            desc += " (got: " + JSON.stringify(got) + " )";
        }
        var li = $("<li>" + desc + "</li>").appendTo(id);
        if (eq(got, output)) {
            li.addClass("right");
        } else {
            li.addClass("wrong");
        }
    };

    var test1 = function(id, f, input, output) {
        var desc = JSON.stringify(input) + " -> " + JSON.stringify(output);
        test(id, f, [input], output, desc);
    };

    test1("#showPerson", showPerson, {name: "Daniel Bergey", email: "dbergey@friendscentral.org"}, "Daniel Bergey <dbergey@friendscentral.org>");
    test1("#showPerson", showPerson, {name: "Colin Angevine", email: "cangevine@friendscentral.org"}, "Colin Angevine <cangevine@friendscentral.org>");

    test1("#showDate", showDate, {year: 2016, month: 01, day: 20, hour: 13, minute: 41, second: 0}, "2016-01-20T13:41:00");
    test1("#showDate", showDate, {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}, "1970-01-01T00:00:00");
    test1("showDate", showDate, {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}, "1969-07-24T16:50:35");

    test("#compareInts", compareInts, [0,1], "LT");
    test("#compareInts", compareInts, [1,0], "GT");
    test("#compareInts", compareInts, [1,1], "EQ");
    test("#compareInts", compareInts, [0,0], "EQ");
    test("#compareInts", compareInts, [0, 100], "LT");
    test("#compareInts", compareInts, [100, 0], "GT");
    test("#compareInts", compareInts, [13, 37], "LT");

    // year
    test("#compareDates", compareDates,
         [ {year: 1910, month: 12, day: 31, hour: 23, minute: 59, second: 59}
        ,  {year: 1990, month: 1, day: 1, hour: 1, minute: 1, second: 1}], "LT");
    test("#compareDates", compareDates,
         [ {year: 1990, month: 1, day: 1, hour: 1, minute: 1, second: 1}
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
       , "GT");
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 10, minute: 30, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}]
       , "LT");
    // minute
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 12, minute: 0, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 30, second: 30}]
       , "LT");
    test("#compareDates", compareDates,
         [ { year: 2016, month: 1, day: 20, hour: 12, minute: 20, second: 30}
        ,  {year: 2016, month: 1, day: 20, hour: 12, minute: 10, second: 30}]
       , "GT");
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
    test("#hasTag", hasTag, ["CS1", {sender: "Bergey", subject: "test",
                                     tags: ["English", "homework", "starred"]}], false);
    test("#hasTag", hasTag, ["draft", {sender: "Bergey", subject: "test",
                                        tags: ["CS1", "homework", "read"]}], false);
    test("#hasTag", hasTag, ["starred", {sender: "Bergey", subject: "test",
                                          tags: ["CS1", "urgent", "starred"]}], true);

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

    test1("#parseYear", parseYear, "1970", 1970);
    test1("#parseYear", parseYear, "2016", 2016);
    test1("#parseYear", parseYear, "1999", 1999);

    test1("#parseDate", parseDate, "2016-01-20T13:41:00", {year: 2016, month: 01, day: 20, hour: 13, minute: 41, second: 0});
    test1("#parseDate", parseDate, "1970-01-01T00:00:00", {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0});
    test1("#parseDate", parseDate, "1969-07-24T16:50:35", {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35});

    test("#inSubject", inSubject, ["cat", emails[0]], true);
    test("#inSubject", inSubject, ["cat", emails[1]], false);
    test("#inSubject", inSubject, ["proof", emails[2]], true);
    test("#inSubject", inSubject, ["proof", emails[3]], false);

    test("#filterBySubject", filterBySubject, ["a", emails], [emails[0], emails[1]]);
    test("#filterBySubject", filterBySubject, ["g", emails], [emails[1], emails[3]]);
    test("#filterBySubject", filterBySubject, ["p", emails], [emails[0], emails[2]]);
    test("#filterBySubject", filterBySubject, ["q", emails], []);

    var bodies = [ {sender: "BC", body: "Two things that I wrote recently that might be worth adding to the\n   conversation:\n\n   Why and how, not just what\n   <http://blog.projectignite.autodesk.com/2015/10/06/why-and-how-not-just-what/>\n   (a dip-your-toes-in primer I wrote for Autodesk's Project Ignite blog)\n   Situating makerspaces in schools\n   <http://www.hybridpedagogy.com/journal/situating-makerspaces-in-schools/>\n   (a more provocative, in-depth essay my colleague, Josh Weisgrau, and I\n   wrote for Hybrid Pedagogy)\n\n   Here's hoping something there might be useful for you!\n   Colin"}
                 , {sender: "Weisgrau", body: "This is the cart that I designed and built to supplement our makerspace\n when we have too many projects going at once.\n It has lots of swappable storage, a built in desk for a laptop and cameo\n cutter, and the cover can be used as a workbench.\n\n Here's a link to an instructable if you want to make your own.\n <http://www.instructables.com/id/Maker-Cart/>\n\n <https://lh3.googleusercontent.com/-LDzGUDjzVpU/VmTkXFE3OqI/AAAAAAAADgQ/WegkQatWgtU/s1600/IMG_20151029_124541179.jpg>\n <https://lh3.googleusercontent.com/-sUsNUWFPGRA/VmTj-o77HqI/AAAAAAAADgA/s-JXOiZ1sk0/s1600/IMG_7310.JPG>\n <https://lh3.googleusercontent.com/-cBK_m94PkBQ/VmTkGef-dII/AAAAAAAADgI/WIxmCAbWQro/s1600/IMG_7311.JPG>"}
                 , { sender: "Daniel", body: 'The type of [1,2,3] is [Int] (or possibly [Integer], [Float], [Double],\n  or similar).  We read [Int] as "list of Ints".  "List" is the instance\n  of Functor, Int is the type to which "list" is applied.\n\n  This may be easier to understand for types which are written prefix,\n  rather than [], which is written around Int.  "List Int" or "Maybe Int"\n  look like a function List or Maybe applied to the argument Int, except\n  that the capitalization reminds us that these are types, not values /\n  terms.\n\n  The section on kinds, may help here.  Kinds give us a formal syntax for\n  expressing things like "list takes a type as input and gives back a new\n  type".\n\n  bergey' }]

    test("#inBody", inBody, ["pedagogy", bodies[0]], true);
    test("#inBody", inBody, ["pedagogy", bodies[1]], false);
    test("#inBody", inBody, ["cart", bodies[0]], false);
    test("#inBody", inBody, ["cart", bodies[1]], true);
    test("#inBody", inBody, ["maker", bodies[0]], true);
    test("#inBody", inBody, ["maker", bodies[1]], true);

    test("#filterByBody", filterByBody, ["pedagogy", bodies], [bodies[0]]);
    test("#filterByBody", filterByBody, ["cart", bodies], [bodies[1]]);
    test("#filterByBody", filterByBody, ["maker", bodies], [bodies[0], bodies[1]]);
    test("#filterByBody", filterByBody, ["type", bodies], [bodies[2]]);
});
