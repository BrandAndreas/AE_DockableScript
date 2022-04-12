{
    function myScript(thisObj) {
        function myScriptBuildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable: true, closeButton: false});

            res = "group{orientation: 'column',\
                    groupOne: Group{orientation: 'row',\
                        createCompButton: Button{text: 'Create Comp'},\
                        },\
                    groupTwo: Panel{orientation: 'row',\
                        deleteCompButton: Button{text: '-'},\
                        deleteText: StaticText{text:'Delete Active Comp'},\
                        },\
                    groupThree: Group{orientation: 'row',\
                        closeButton: Button{text: 'Close'},\
                        },\
            }";

            myPanel.grp = myPanel.add(res);

            // Defaults / Functionalites

            myPanel.grp.groupOne.createCompButton.onClick = function () {

            }

            myPanel.grp.groupTwo.deleteCompButton.onClick = function () {
                
            }

            myPanel.grp.groupTwo.deleteCompButton.size = [25,25];

            myPanel.grp.groupThree.closeButton.onClick = function () {
                myPanel.close();
            }

            myPanel.layout.layout(true);

            return myPanel;
        }

        var myScriptPal = myScriptBuildUI(thisObj);

        if(myScriptPal != null && myScriptPal instanceof Window) {
            myScriptPal.center();
            myScriptPal.show();
        }
    }
    myScript(this);
}