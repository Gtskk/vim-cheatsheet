$(document).ready(function () {
	var image = $('img');
	var xref = {
		vim: "<b>VIM</b>命令图解",
		h_key: "向左移动",
		l_key: "向右移动"
	};
	image.mapster(
		{
			fillOpacity: 0.4,
			fillColor: "d42e16",
			strokeColor: "3320FF",
			strokeOpacity: 0.8,
			strokeWidth: 4,
			stroke: true,
			isSelectable: true,
			singleSelect: true,
			mapKey: 'name',
			listKey: 'name',
			onClick: function (e) {
					$('#selections').html('不错哦');
			},
			showToolTip: true,
			toolTipClose: ['area-mouseout'],
			areas: [
				{
					key: "vim",
					fillColor: "ffffff",
					toolTip: "<b>VIM</b>命令图解"
				},
				{
					key: "h_key",
					fillColor: "000000",
					toolTip: "向左移动"
				},
				{
					key: "l_key",
					fillColor: "000000",
					toolTip: "向右移动"
				},
				{
						key: "k_key",
						toolTip: "向上移動"
				},
				{
						key: "j_key",
						toolTip: "向下移動"
				},
				{
						key: "w_key",
						toolTip: "按单词移动，向右移到下一个单词开头，一个单词由字母，数字和下划线组成"
				},
				{
						key: "e_key",
						toolTip: "按单词移动，向右移到下一个单词结尾，对于大写的E，则认为单词是由空格来分隔"
				},
				{
						key: "W_key",
						toolTip: "单词移动，不同于小写w的是，它认为单词是由空格来分隔"
				},
				{
						key: "b_key",
						toolTip: "单词移动，光标左移一个单词到开头"
				},
				{
						key: "B_key",
						toolTip: "单词移动，不同于小写b的是，它认为单词是由空格来分隔"
				},
				{
						key: "0_key",
						toolTip: "是数字0，将光标移动至当前行首（注意与^区分）"
				},
				{
						key: "$_key",
						toolTip: "将光标移动至行尾"
				},
				{
						key: "^_key",
						toolTip: "将光标移动至当前行首（注意与0区分）"
				},
				{
						key: "{_key",
						toolTip: "移动到段落或者区块的上一段"
				},
				{
						key: "}_key",
						toolTip: "移动到段落或者区块的下一段"
				},
				{
						key: "[{_key",
						toolTip: "移动到段落或者区块的开头"
				},
				{
						key: "]}_key",
						toolTip: "移动到段落或者区块的结尾"
				},
				{
						key: "%_key",
						toolTip: "匹配括号移动，包括 (, {, ["
				},
				{
						key: "H_key",
						toolTip: "跳转到屏幕顶端"
				},
				{
						key: "zt_key",
						toolTip: "将当前行移动到屏幕顶端"
				},
				{
						key: "M_key",
						toolTip: "跳转到屏幕中间"
				},
				{
						key: "zz_key",
						toolTip: "将当前行移动到屏幕中间"
				},
				{
						key: "L_key",
						toolTip: "跳转到屏幕底部"
				},
				{
						key: "zb_key",
						toolTip: "将当前行移动到屏幕底部"
				},
				{
						key: "c_b_key",
						toolTip: "跳到上一页"
				},
				{
						key: "c_f_key",
						toolTip: "跳到下一页"
				},
				{
						key: "gg_key",
						toolTip: "跳到文件顶部"
				},
				{
						key: "G_key",
						toolTip: "跳到文件底部"
				},
				{
						key: "mx_key",
						toolTip: "一般用不到，先不纠结吧，嘿嘿"
				},
				{
						key: "tz_x_key",
						toolTip: "一般用不到，先不纠结吧，嘿嘿"
				},
				{
						key: "*_key",
						toolTip: "向后搜索光标所在单词"
				},
				{
						key: "#_key",
						toolTip: "向前搜索光标所在单词"
				},
				{
						key: "fx_key",
						toolTip: "向后搜索字符x"
				},
				{
						key: "gd_key",
						toolTip: "跳转到光标所在单词的定义处"
				},
				{
						key: "xg_key",
						toolTip: "搜索xxx"
				},
				{
						key: "n_key",
						toolTip: "对于/搜索出来的结果，可以选中下一个搜索结果，?搜索出来的则相反"
				},
				{
						key: "N_key",
						toolTip: "对于/搜索出来的结果，可以选中上一个搜索结果，?搜索出来的则相反"
				},
				{
						key: "esc_key",
						toolTip: "进入正常模式"
				},
				{
						key: "v_key",
						toolTip: "进入可视模式"
				},
				{
						key: "V_key",
						toolTip: "进入可视行模式"
				},
				{
						key: "c_v_key",
						toolTip: "进入可视区块模式"
				},
				{
						key: "i_key",
						toolTip: "进入插入模式"
				},
				{
						key: "R_key",
						toolTip: "进入替换模式"
				},
				{
						key: "a_key",
						toolTip: "在光标所在处之后添加"
				},
				{
						key: "A_key",
						toolTip: "在光标所在行的结尾处添加"
				},
				{
						key: "y_key",
						toolTip: "复制一段范围"
				},
				{
						key: "d_key",
						toolTip: "删除或者剪切一段范围"
				},
				{
						key: "c_key",
						toolTip: "编辑修改"
				},
				{
						key: "x_key",
						toolTip: "删除或者剪切单个字符"
				},
				{
						key: "D_key",
						toolTip: "将光标所在处到行尾删除"
				},
				{
						key: "C_key",
						toolTip: "修改光标所在处到行尾的内容"
				},
				{
						key: "p_key",
						toolTip: "粘贴"
				},
				{
						key: "J_key",
						toolTip: "和下一行合并成一行"
				},
				{
						key: "r_key",
						toolTip: "替换单个字符"
				},
				{
						key: ">_key",
						toolTip: "缩进"
				},
				{
						key: "<_key",
						toolTip: "反缩进"
				},
				{
						key: "jh_key",
						toolTip: "重复上一命令"
				},
				{
						key: "u_key",
						toolTip: "撤销上一命令"
				},
				{
						key: "mh_w_key",
						toolTip: "保存，:wq则表示保存并退出"
				},
				{
						key: "mh_q_key",
						toolTip: "退出，:!q则表示强制退出"
				},
				{
						key: "mh_e_key",
						toolTip: "编辑文件x"
				},
				{
						key: "mh_n_key",
						toolTip: "新建文件"
				},
				{
						key: "mh_h_key",
						toolTip: "打开vim help，如果后面加上指令，则是打开特定指令的帮助"
				},
				{
						key: "mh_l_key",
						toolTip: "跳到xx行"
				},
				{
						key: "c_n_key",
						toolTip: "自动补全下一个可能的代码"
				},
				{
						key: "c_p_key",
						toolTip: "自动补全上一个可能的代码"
				},
				{
						key: "c_x_c_f_key",
						toolTip: "自动补全可能的文件名"
				},
				{
						key: "mh_vsp_key",
						toolTip: "垂直分割屏幕，这是vsplit的简写，分割过之后可以通过Ctrl+w+'h,j,k,l'切换到目标分屏，也可以也可以直接按 Ctrl+w+w 来跳转分屏，不过跳转方向则是在当前Vim窗口所有分屏中，按照逆时针方向跳转。"
				},
				{
						key: "mh_sp_key",
						toolTip: "水平分隔屏幕，这是split的简写，分割过之后可以通过Ctrl+w+'h,j,k,l'切换到目标分屏，也可以也可以直接按 Ctrl+w+w 来跳转分屏，不过跳转方向则是在当前Vim窗口所有分屏中，按照逆时针方向跳转。"
				},
				{
						key: "mh_diffs_key",
						toolTip: "分割屏幕，并比较文件"
				},
				{
						key: "c_w_p_key",
						toolTip: "来回跳转到前一个分屏中"
				},
				{
						key: "c_w_w_key",
						toolTip: "跳转到下一个分屏中，是按逆时针方向跳转的"
				}
			]
		});
});