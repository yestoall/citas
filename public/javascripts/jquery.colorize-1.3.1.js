/**
* jQuery.colorize
* Copyright (c) 2008 Eric Karimov - ekarim57(at)gmail(dot)com | http://franca.exofire.net/jq/
* Dual licensed under MIT and GPL.
* Date: 10/27/2008
*
* @projectDescription Table colorize using jQuery.
* http://franca.exofire.net/jq/colorize
*
* @author Eric Karimov, contributor Aymeric Augustin
* @version 1.3.1
*
* @param {altColor, bgColor, hoverColor, hiliteColor,oneClick, columns, banColumns}
* altColor : alternate row background color
* bgColor : background color (The default background color is white).
* hoverColor : background color when you hover a mouse over a row
* hiliteColor : row highlight background color, 'none' could be used for no highlight
* oneClick : true/false(default) -	 if true, clicking a new row reverts the current highlighted row to the original background color
* columns : true/false(default)  - if true, highlights columns instead of rows
* banColumns : []	- columns not to be highlighted; supply an array of column indices, starting from 0
* @return {jQuery} Returns the same jQuery object, for chaining.
*
* @example $('#tbl1').colorize();
*
* @$('#tbl1').colorize({bgColor:'#EAF6CC', hoverColor:'green', hiliteColor:'red', columns:true, banColumns:[4,5,8]});
*
* @$('#tbl1').colorize({ columns : true, oneClick:true});
* All the parameters are optional.
*/

jQuery.fn.colorize = function(params) {
	options = {
		altColor: '#ECF6FC',
		bgColor: '#fff',
		hoverColor: '#BCD4EC',
		hiliteColor: 'yellow',
		oneClick: false,
		columns: false,
		banColumns: []
	};
	jQuery.extend(options, params);

	var colorHandler = {
		checkHover: function() {
			if (!this.onfire) {
				this.origColor = this.style.backgroundColor;
				this.style.backgroundColor= options.hoverColor;
			}
		},
		checkHoverOut: function() {
			if (!this.onfire) {
				this.style.backgroundColor=this.origColor;
			}
		},
		highlight: function() {
			if (options.hiliteColor != 'none') {
				this.style.backgroundColor= options.hiliteColor;
				this.onfire = true;
			}
		},
		stopHighlight: function() {
			this.onfire = false;
			this.style.backgroundColor = this.origColor;
		}
	}

	function getColCells(cells, idx) {
		var arr = [];
		for (var i = 0; i < cells.length; i++) {
			if (cells[i].cellIndex == idx)
				arr.push(cells[i]);
		}
		return arr;
	}

	function processCells(cells, idx, func) {
		var colCells = getColCells(cells, idx);
		jQuery.each(colCells, function(index, cell2) {
			func.call(cell2);
		});
	}

	function processAdapter(cells, cell, func) {
		processCells(cells, cell.cellIndex, func);
	}

	function toggleColumnClick(cells) {
		var func = (!this.onfire) ? colorHandler.highlight : colorHandler.stopHighlight;
		processAdapter(cells, this, func);
	}

	function toggleRowClick(cells) {
		row = jQuery(this).parent().get(0);
		if (!row.onfire)
			colorHandler.highlight.call(row);
		else
			colorHandler.stopHighlight.call(row);
	}

	function oneColumnClick(cells) {
		processAdapter(cells, this, colorHandler.highlight);
		if (cells.clicked > -1) {
			processCells(cells, cells.clicked, colorHandler.stopHighlight);
		}
		cells.clicked  = this.cellIndex;
	}

	function oneRowClick(cells) {
		row = jQuery(this).parent().get(0);
		colorHandler.highlight.call(row);
		if (cells.clicked) {
			colorHandler.stopHighlight.call(jQuery(cells.clicked).parent().get(0));
		}
		cells.clicked = this;
	}

	function checkBan() {
		return (jQuery.inArray(this.cellIndex, options.banColumns) != -1) ;
	}

	return this.each(function() {

		jQuery(this).find('tr:odd').css('background', options.bgColor);
		jQuery(this).find('tr:even').css('background', options.altColor);

		var cells = jQuery(this).find('td,th');
		cells.clicked = null;

		if (options.columns) {
			jQuery.each(cells, function(i, cell) {
				cell.onmouseover = function() {
					processAdapter(cells, this, colorHandler.checkHover);
				}
				cell.onmouseout = function() {
					processAdapter(cells, this, colorHandler.checkHoverOut);
				}
				cell.onclick = function() {
					if (checkBan.call(this))
						return;
					if (options.oneClick)
						oneColumnClick.call(this, cells);
					else
						toggleColumnClick.call(this, cells);
				}
			});
		}
		else {
			jQuery.each(cells, function(i, cell) {
				row = jQuery(cell).parent().get(0);
				row.onmouseover = colorHandler.checkHover ;
				row.onmouseout = colorHandler.checkHoverOut ;
				cell.onclick = function () {
						if (checkBan.call(this))
							return;
						if (options.oneClick)
							oneRowClick.call(this, cells);
						else
							toggleRowClick.call(this, cells);
				}
			});
 		}
 	});
 }

