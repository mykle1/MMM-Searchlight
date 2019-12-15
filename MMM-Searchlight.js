/* Magic Mirror
 * Module: MMM-Searchlight
 *
 * By Mykle1
 * MIT Licensed.
 */

Module.register("MMM-Searchlight", {
	// Default module config.
	defaults: {
		name: "",
		font: "",
		fontSize: "",
		fontWeight: "",
		fontSpacing: ""
	},


		start: function() {
		Log.info("Starting module: " + this.name);
		},

	getStyles: function() {
		return ["MMM-Searchlight.css"];
	},

	getDom: function() {


        var wrapper = document.createElement("div");
        wrapper.innerHTML= `<svg viewBox="250 0 700 300">
	<defs>

   <clipPath id="text-1">

    <text id="Mask" font-family=${this.config.font} font-size=${this.config.fontSize} font-weight=${this.config.fontWeight} letter-spacing=${this.config.fontSpacing} fill="#121212">
                    <tspan x="" y="195">${this.config.name}</tspan>
                </text>

   </clipPath>

 </defs>
<g>

	<text id="Mask" font-family=${this.config.font} font-size=${this.config.fontSize} font-weight=${this.config.fontWeight} letter-spacing=${this.config.fontSpacing} fill="#121212">
                    <tspan x="0" y="195">${this.config.name}</tspan>
                </text>
	</text>
	</g>
//clip-path="url(#text-1)"
 <g clip-path="url(#text-1)">
	<polygon class="light" fill="#F8F8F8" points="91.7663783 -503.51439292 176.859739 -3.51439292 234.191437 922.485607 -154.808563 887.785896"></polygon>
 </g>
</svg>`;



	 return wrapper;
    },

});
