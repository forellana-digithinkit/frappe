// Copyright (c) 2020, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Desk Page', {
	refresh: function(frm) {
		frm.get_field("is_standard").toggle(frappe.boot.developer_mode);
		frm.get_field("extends_another_page").toggle(frappe.boot.developer_mode);
		if (!frappe.boot.developer_mode) {
			frm.set_read_only();
			frm.fields
				.filter(field => field.has_input)
				.forEach(field => {
					frm.set_df_property(field.df.fieldname, "read_only", "1");
				});
			frm.disable_save();
		}
	}
});
