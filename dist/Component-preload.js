/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "demo/app/excelZUIExcel/Component-preload",
	"modules": {
		"demo/app/excelZUIExcel/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"demo/app/excelZUIExcel/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"demo.app.excelZUIExcel.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"demo/app/excelZUIExcel/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});",
		"demo/app/excelZUIExcel/fragments/createEntry.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:l=\"sap.ui.layout\" xmlns:core=\"sap.ui.core\" xmlns:f=\"sap.ui.layout.form\">\r\n\t<Dialog title=\"Add New Material\" contentHeight=\"auto\" contentWidth=\"auto\" busyIndicatorDelay=\"0\">\r\n\t\t<content>\r\n\t\t\t<f:SimpleForm class=\"editableForm\" columnsL=\"1\" columnsM=\"1\" editable=\"true\" emptySpanL=\"4\" emptySpanM=\"4\" id=\"secureDetailsForm\"\r\n\t\t\t\tlabelSpanL=\"3\" labelSpanM=\"3\" layout=\"ResponsiveGridLayout\" maxContainerCols=\"2\">\r\n\t\t\t\t<f:content>\r\n\t\t\t\t\t<Label text=\"Location\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/Location}\" valueLiveUpdate=\"true\"/>\r\n\t\t\t\t\t<Label text=\"Collector\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/Collector}\" valueLiveUpdate=\"true\"/>\r\n\t\t\t        <Label text=\"Material\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/Material}\" valueLiveUpdate=\"true\"/>\r\n\t\t\t        <Label text=\"EndDate\" required=\"true\"/>\r\n\t\t\t        <DatePicker id=\"inqDate\" valueFormat=\"MM.dd.yyyy\"\r\n                \t\t\t\tdisplayFormat=\"MM.dd.yyyy\" value=\"{local>/newEntry/EndDate}\" ></DatePicker>\r\n\t\t\t        <Label text=\"Quantity\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/Quantity}\" type=\"Number\" valueLiveUpdate=\"true\"/>\r\n\t\t\t        <Label text=\"Cost\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/Cost}\" type=\"Number\" valueLiveUpdate=\"true\" liveChange=\"onLiveChange\"/>\r\n\t\t\t        <Label text=\"Labor Cost\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/LaborCost}\" type=\"Number\" valueLiveUpdate=\"true\" liveChange=\"onLiveChange\"/>\r\n\t\t\t        <Label text=\"Emission Cost\" required=\"true\"/>\r\n\t\t\t        <Input value=\"{local>/newEntry/EmissionCost}\" type=\"Number\" valueLiveUpdate=\"true\" liveChange=\"onLiveChange\"/>\r\n\t\t\t        <Label text=\"Emission Cost\" required=\"true\"/>\r\n\t\t\t        <Text text=\"{local>/newEntry/AvgCost}\"/>\r\n\t\t\t\t</f:content>\r\n\t\t\t</f:SimpleForm>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Create\" press=\"onPressHandleSecureOkPopup\"/>\r\n\t\t\t<Button text=\"Cancel\" press=\"onPressHandleSecureCancelPopup\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\t\r\n</core:FragmentDefinition>",
		"demo/app/excelZUIExcel/controller/Main.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/core/routing/History\",\n\t\"sap/m/Dialog\",\n\t\"sap/ui/unified/FileUploader\",\n\t\"sap/m/MessageToast\",\n\t\"sap/m/MessageBox\"\n], function(Controller, JSONModel, History, Dialog, FileUploader, MessageToast, MessageBox) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"demo.app.excelZUIExcel.controller.Main\", {\n\t\tonInit: function(){\n\t\t\t\tvar oJson = new JSONModel();\n\t\t\t\toJson.setData({data: [],  newEntry: {\n\t\t\t\t\tLocation:\"\",\n\t\t\t\t\tCollector:\"\",\n\t\t\t\t\tMaterial:\"\",\n\t\t\t\t\tEndDate: this.getFormattedDate(0),\n\t\t\t\t\tQuantity:0,\n\t\t\t\t\tCost:0,\n\t\t\t\t\tLaborCost:0,\n\t\t\t\t\tEmissionCost:0,\n\t\t\t\t\tAvgCost:0\n\t\t\t\t}})\t\t;\n\t\t\t\tthis.getView().setModel(oJson,\"local\");\n\t\t\t\tthis.localModel = oJson;\n\t\t},\n\t\tonLiveChange: function(){\n\t\t\tvar sValues = \tthis.localModel.getProperty(\"/newEntry\");\n\t\t\tsValues.AvgCost = ( parseFloat(sValues.Cost) + parseFloat(sValues.LaborCost) + parseFloat(sValues.EmissionCost) ) / 3;\n\t\t\tvar newVal = parseFloat(sValues.AvgCost).toFixed(2);\n\t\t\tthis.localModel.setProperty(\"/newEntry/AvgCost\", newVal);\n\t\t},\n\t\tonCellChange: function(oEvent){\n\t\t\tvar currentRow = oEvent.getSource().getParent();\n\t\t\tvar cost = currentRow.getCells()[5].getValue();\n\t\t\tvar labor = currentRow.getCells()[6].getValue();\n\t\t\tvar emission = currentRow.getCells()[7].getValue();\n\t\t\tvar calcVal = parseFloat(cost) + parseFloat(labor) + parseFloat(emission);\n\t\t\tvar final = parseFloat(calcVal / 3).toFixed(2);\n\t\t\tcurrentRow.getCells()[8].setText(final);\n\t\t},\n\t\tgetFormattedDate: function(monthInc) {\n\t\t\tvar dateObj = new Date();\n\t\t\tdateObj.setDate(dateObj.getDate());\n\t\t\tvar dd = dateObj.getDate();\n\t\t\tdateObj.setMonth(dateObj.getMonth() + monthInc);\n\t\t\tvar mm = dateObj.getMonth() + 1;\n\t\t\tvar yyyy = dateObj.getFullYear();\n\t\t\tif (dd < 10) {\n\t\t\t\tdd = '0' + dd;\n\t\t\t}\n\t\t\tif (mm < 10) {\n\t\t\t\tmm = '0' + mm;\n\t\t\t}\n\t\t\treturn mm + '.' + dd + '.' + yyyy;\n\t\t},\n\t\tonUpload: function (e) {\n\t\t\tthis._import(e.getParameter(\"files\") && e.getParameter(\"files\")[0]);\n\t\t},\n\t\tonPressHandleSecureOkPopup: function(){\n\t\t\tvar sValues = this.localModel.getProperty(\"/newEntry\");\n\t\t\tif(sValues.Cost === 0 || sValues.Cost === \"\" || sValues.Material === \"\" || sValues.Collector === \"\" || sValues.Location === \"\"){\n\t\t\t\tMessageBox.error(\"Please enter valid value\");\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tvar aData = this.localModel.getProperty(\"/data\");\n\t\t\taData.splice(0, 0, sValues);\n\t\t\tthis.localModel.setProperty(\"/data\", aData);\n\t\t\tthis._oDialogSecure.close();\n\t\t},\n\t\tonPressHandleSecureCancelPopup: function(){\n\t\t\tthis._oDialogSecure.close();\n\t\t},\n\t\tonAddExcelData: function() {\n\t\t\t//This code was generated by the layout editor.\n\t\t\tvar that = this;\n\t\t\t//Step 1: Create a popup object as a global variable\n\t\t\tif (this.fixedDialog === undefined) {\n\t\t\t\tthis.fixedDialog = new Dialog({\n\t\t\t\t\ttitle: \"Choose XSLX File For Upload\",\n\t\t\t\t\twidth: \"60%\",\n\t\t\t\t\tbeginButton: new sap.m.Button({\n\t\t\t\t\t\ttext: \"Close\",\n\t\t\t\t\t\tpress: function(oEvent) {\n\t\t\t\t\t\t\tthat.fixedDialog.close();\n\t\t\t\t\t\t}\n\t\t\t\t\t}),\n\t\t\t\t\tcontent: [\n\t\t\t\t\t\tnew FileUploader(\"excelUploader\",{\n\t\t\t\t\t\t\tfileType: \"XLSX,xlsx\",\n\t\t\t\t\t\t\tchange: [this.onUpload, this],\n\t\t\t\t\t\t\tclass: \"sapUiLargeMargin\"\n\t\t\t\t\t\t})\n\t\t\t\t\t]\n\t\t\t\t});\n\t\t\t\tthis.getView().addDependent(this.fixedDialog);\n\t\t\t}\n\t\t\t//Step 2: Launch the popup\n\t\t\tthis.fixedDialog.open();\n\t\t},\n\t\tformatDate: function(endDate){\n\t\t\tvar x = new Date(endDate);\n\t\t\tvar mon = ('0' + (x.getMonth()+1)).slice(-2);\n\t\t\tvar day = ('0' + x.getDate()).slice(-2);\n\t\t\tvar year = x.getFullYear();\n\t\t\treturn year + mon + day;\n\t\t},\n\t\tonSearch: function(oEvent){\n\t\t\tvar search = oEvent.getParameter(\"query\");\n\t\t\tvar oFilter1 = new sap.ui.model.Filter(\"Location\", sap.ui.model.FilterOperator.Contains, search);\n\t\t\tvar oFilter2 = new sap.ui.model.Filter(\"Material\", sap.ui.model.FilterOperator.Contains, search);\n\t\t\tvar oFilter = new sap.ui.model.Filter({\n\t\t\t\tfilters: [oFilter1, oFilter2],\n\t\t\t\tand: false\n\t\t\t});\n\t\t\tthis.getView().byId(\"idTable\").getBinding(\"items\").filter([oFilter]);\n\t\t},\n\t\t_oDialogSecure: null,\n\t\tonAdd: function(oEvent){\n\t\t\tif (!this._oDialogSecure) {\n\t\t\t\tthis._oDialogSecure = sap.ui.xmlfragment(\"Secure_Dialog\", \"demo.app.excelZUIExcel.fragments.createEntry\", this);\n\t\t\t\tthis.getView().addDependent(this._oDialogSecure);\n\t\t\t}\n\t\t\t//jQuery.sap.syncStyleClass(\"sapUiSizeCompact\", this.getView(), this._oDialogSecure);\n\t\t\tthis._oDialogSecure.open();\n\t\t},\n\t\tonSave: function(){\n\t\t\tvar xData = this.localModel.getProperty(\"/data\");\n\t\t\tvar aData = JSON.parse(JSON.stringify(xData));\n\t\t\tfor(var i = 0;i<aData.length;i++){\n\t\t\t\taData[i].EndDate = this.formatDate(aData[i].EndDate);\n\t\t\t}\n\t\t\t//var base64Str = Buffer.from(JSON.stringify(aData)).toString(\"base64\");\n\t\t\tvar base64Str = btoa(decodeURIComponent(JSON.stringify(aData)));\n\t\t\tvar payload = {Key : \"PST\", Value : base64Str};\n\t\t\tthis.getView().getModel().create(\"/CollectorSet\", payload,{\n\t\t\t\tsuccess: function(){\n\t\t\t\t\tMessageToast.show(\"Data has been saved to SAP system\");\n\t\t\t\t}\n\t\t\t});\n\t\t},\n\t\t_import: function (file) {\n\t\t\tvar that = this;\n\t\t\tvar excelData = {};\n\t\t\tif (file && window.FileReader) {\n\t\t\t\tvar reader = new FileReader();\n\t\t\t\treader.onload = function (e) {\n\t\t\t\t\tvar data = e.target.result;\n\t\t\t\t\tvar workbook = XLSX.read(data, {\n\t\t\t\t\t\ttype: 'binary'\n\t\t\t\t\t});\n\t\t\t\t\tworkbook.SheetNames.forEach(function (sheetName) {\n\t\t\t\t\t\t// Here is your object for every sheet in workbook\n\t\t\t\t\t\texcelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);\n\n\t\t\t\t\t});\n\t\t\t\t\tfor (var i=0; i<excelData.length; i++) {\n\t\t\t\t\t\texcelData[i].AvgCost = parseFloat(( parseInt(excelData[i].Cost)   + parseInt(excelData[i].LaborCost)  + parseInt(excelData[i].EmissionCost) ) / 3).toFixed(2);                         \n\t\t\t\t\t}\n\t\t\t\t\t// Setting the data to the local model \n\t\t\t\t\tthat.localModel.setData({\n\t\t\t\t\t\tdata: JSON.parse(JSON.stringify(excelData)),\n\t\t\t\t\t\tnewEntry: {\n\t\t\t\t\t\t\tLocation:\"\",\n\t\t\t\t\t\t\tCollector:\"\",\n\t\t\t\t\t\t\tMaterial:\"\",\n\t\t\t\t\t\t\tEndDate: that.getFormattedDate(0),\n\t\t\t\t\t\t\tQuantity:0,\n\t\t\t\t\t\t\tCost:0,\n\t\t\t\t\t\t\tLaborCost:0,\n\t\t\t\t\t\t\tEmissionCost:0,\n\t\t\t\t\t\t\tAvgCost:0\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\tthat.localModel.refresh(true);\n\t\t\t\t};\n\t\t\t\treader.onerror = function (ex) {\n\t\t\t\t\tconsole.log(ex);\n\t\t\t\t};\n\t\t\t\treader.readAsBinaryString(file);\n\t\t\t\tthis.fixedDialog.close();\n\t\t\t}\n\t\t}\n\t});\n});",
		"demo/app/excelZUIExcel/view/Main.view.xml": "<mvc:View controllerName=\"demo.app.excelZUIExcel.controller.Main\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\"\n\txmlns:u=\"sap.ui.unified\" displayBlock=\"true\" xmlns=\"sap.m\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<!--<customHeader>-->\n\t\t\t\t<!--\t<Bar>-->\n\t\t\t\t<!--\t\t<contentMiddle>-->\n\t\t\t\t<!--\t\t\t<Label text=\"Read Data From Excel\"/>-->\n\t\t\t\t<!--\t\t</contentMiddle>-->\n\t\t\t\t<!--\t\t<contentRight>-->\n\t\t\t\t<!--\t\t\t<u:FileUploader id=\"FileUploaderId\" sameFilenameAllowed=\"true\" iconOnly=\"false\" buttonOnly=\"true\" fileType=\"XLSX,xlsx\"-->\n\t\t\t\t<!--\t\t\t\ticon=\"sap-icon://upload\" iconFirst=\"true\" style=\"Emphasized\" change=\"onUpload\"/>-->\n\t\t\t\t<!--\t\t</contentRight>-->\n\t\t\t\t<!--\t</Bar>-->\n\t\t\t\t<!--</customHeader>-->\n\t\t\t\t<content>\n\t\t\t\t\n\t\t\t\t<Table\n\t\t\t\tid=\"idTable\"\n\t\t\t\twidth=\"auto\"\n\t\t\t\tclass=\"sapUiResponsiveMargin\"\n\t\t\t\tnoDataText=\"{worklistView>/tableNoDataText}\"\n\t\t\t\titems=\"{local>/data}\">\n\t\t\t\t<headerToolbar>\n\t\t\t\t\t<Toolbar>\n\t\t\t\t\t\t<Title id=\"idTopTitle\" text=\"Upload Data\"/>\n\t\t\t\t\t\t<ToolbarSpacer />\n\t\t\t\t\t\t<SearchField width=\"30%\" search=\"onSearch\" placeholder=\"enter location\"></SearchField>\n\t\t\t\t\t\t<Button icon=\"sap-icon://add\" press=\"onAdd\"></Button>\n\t\t\t\t\t\t<Button icon=\"sap-icon://excel-attachment\" press=\"onAddExcelData\"></Button>\n\t\t\t\t\t</Toolbar>\n\t\t\t\t</headerToolbar>\n\n\t\t\t\t<columns>\n\t\t\t\t\t<Column id=\"idTopName\">\n\t\t\t\t\t\t<Text text=\"Location\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idBrand\">\n\t\t\t\t\t\t<Text text=\"Cost Collector\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idPrice\" >\n\t\t\t\t\t\t<Text text=\"Materials\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idEndDate\" >\n\t\t\t\t\t\t<Text text=\"End Date\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idQuantity\" >\n\t\t\t\t\t\t<Text text=\"Quantity\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idCost\" >\n\t\t\t\t\t\t<Text text=\"Cost\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idLaborCost\" >\n\t\t\t\t\t\t<Text text=\"Labor Cost\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idEmissionCost\" >\n\t\t\t\t\t\t<Text text=\"Emission Cost\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column id=\"idAvgCost\" >\n\t\t\t\t\t\t<Text text=\"Average Cost\"/>\n\t\t\t\t\t</Column>\n\t\t\t\t</columns>\n\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem\n\t\t\t\t\t\ttype=\"Navigation\"\n\t\t\t\t\t\tpress=\"onPress\">\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Text text=\"{local>Location}\"></Text>\n\t\t\t\t\t\t\t<Text text=\"{local>Collector}\"></Text>\n\t\t\t\t\t\t\t<Text text=\"{local>Material}\"></Text>\n\t\t\t\t\t\t\t<Text text=\"{local>EndDate}\"></Text>\n\t\t\t\t\t\t\t<Input value=\"{local>Quantity}\"></Input>\n\t\t\t\t\t\t\t<Input value=\"{local>Cost}\" liveChange=\"onCellChange\"></Input>\n\t\t\t\t\t\t\t<Input value=\"{local>LaborCost}\" liveChange=\"onCellChange\"></Input>\n\t\t\t\t\t\t\t<Input value=\"{local>EmissionCost}\" liveChange=\"onCellChange\"></Input>\n\t\t\t\t\t\t\t<Text text=\"{local>AvgCost}\"></Text>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t</Table>\n\t\t\t\n\t\t\t\t</content>\n\t\t\t\t\n\t\t\t\t<footer>\n\t\t\t\t\t<Toolbar>\n\t\t\t\t\t\t<ToolbarSpacer />\n\t\t\t\t\t\t<Button text=\"Save\" press=\"onSave\"></Button>\n\t\t\t\t\t</Toolbar>\n\t\t\t\t</footer>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>"
	}
});