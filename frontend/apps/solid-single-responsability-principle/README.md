# SOLID - SRP - Example To Do List

## Single Responsibility Principle (SRP)

-   Every function/class/component should do exactly one thing and do it well;
-   this is the most important principle to follow when writing frontends in React;
-   SRP encourages us to fragment our code, from monolithic files containing thousands of lines, into dozens of smaller 50-100 line files - because it encourages us to extract functionality from our files into separate functions, such that our codebase becomes more **modular** - makes it much more **maintainable**, also makes our codebase much more **robust** and **testable**;

> Note: There is nothing special about 50-150 lines of code. This is not a hard rule. It can simply be used as a possible indication that you need to think about whether you can extract more functionality.

Large functions/components often indicate that they are doing more than one thing; try to keep functions/components small to ensure modularity.

## Resources

-   [everyday react](https://www.everydayreact.com/articles/solid-principles-in-react)
