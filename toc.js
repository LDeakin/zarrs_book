// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><div>Quick Start (Rust)</div></li><li class="chapter-item expanded affix "><div>Quick Start (Python)</div></li><li class="chapter-item expanded affix "><li class="part-title">Rust Library (zarrs)</li><li class="chapter-item expanded "><a href="installation.html"><strong aria-hidden="true">1.</strong> Installation</a></li><li class="chapter-item expanded "><a href="crates.html"><strong aria-hidden="true">2.</strong> Crates</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> Basic usage</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> Create or open a group</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> Create or open an array</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> Writing metadata</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> Reading array data</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> Writing array data</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> Advanced usage</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> Configuration</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> Partial decoding</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> Partial encoding</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> Converting Zarr V2 to V3</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> Performance tips</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> Extending zarrs</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> Creating a new store</div></li></ol></li><li class="chapter-item expanded "><li class="part-title">Python Bindings (zarrs_python)</li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> Installation</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> Usage</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> Limitations</div></li><li class="chapter-item expanded affix "><li class="part-title">C/C++ Bindings (zarrs_ffi)</li><li class="chapter-item expanded "><a href="zarrs_ffi.html"><strong aria-hidden="true">10.</strong> CMake Setup</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> Usage</div></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">CLI Tools (zarrs_tools)</li><li class="chapter-item expanded "><a href="zarrs_tools.html"><strong aria-hidden="true">12.</strong> Installation</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> zarrs_reencode</div></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Zarr Implementation Benchmarks</li><li class="chapter-item expanded "><a href="zarr_benchmarks/index.html"><strong aria-hidden="true">14.</strong> Benchmarks</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
