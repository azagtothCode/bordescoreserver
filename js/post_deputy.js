supurl='http://104.239.249.32:8000';

  $.ajax({
    url: supurl+'/diputados/basic/dip/get',
    method: "POST",
    data: {legislator_chamber_sil:"diputado"},
    dataType: "json"
  }).done(function(data) {
    subject=data.dip;
    console.log(subject);
    nuevoarray = [];
    for (var i = 0; i < subject.length; i++) {
        val=subject[i];

        var pick_party = val.legislator_party_sil;
        var res_pick_party = pick_party.toLowerCase();

        var pick_legis = val.legislator_image_sil;
        var res_pick = pick_legis.slice(16, -4);

        var facebook = val.legislator_facebook_sil;

          if(facebook == "FACEBOOK"){
            var class_none_facebook = "none";
          }else{
            var class_none_facebook = "block";
          }

        var twitter = val.legislator_twitter_senate;

          if(twitter == ""){
            var class_none_twitter = "none";
          }else{
            var class_none_twitter = "block";
          }

        var mail = val.legislator_mail_sil;

          if(mail == ""){
            var class_none_mail = "none";
          }else{
            var class_none_mail = "block";
          }

          if(val.legislator_gender_senate == "Masculino"){
              var chamber = "Diputado";
          }

          if(val.legislator_gender_senate == "Femenino"){
              var chamber = "Diputada";
          }

        var state = val.legislator_state_sil;


        var score = val.legislator_score_sil;

          if(score == 100 ){
            var score_val = "<p ng-click='openPerfilPage(item.id)'>"+score+"</p>";
          }else if(score < 100 && score  > 20){
            var score_val = "<span ng-click='openPerfilPage(item.id)'>"+score+"</span>";
          }else if(score  < 20 && score  > 10){
            var score_val = "<span class='menorVeinte' ng-click='openPerfilPage(item.id)'>"+score+"</span>";
          }else if(score  < 10){
            var score_val = "<span class='menorDiez' ng-click='openPerfilPage(item.id)'>"+score+"</span>";
          }

        var name = val.legislator_name_sil;

        var representation = val.legislator_election_sil;

          if(representation == "RP" ){
            representation = "Representación Proporcional"
          }

          if(representation == "MR"){
            representation = "Mayoria Relativa"
          }

          if(representation == "PM"){
            representation = "Representación Proporcional"
          }

        var post_commision = val.legislator_commission_sil;



        var commission_string  = JSON.stringify(post_commision);

        var npres = commission_string.indexOf("Presidente");
        var nsec = commission_string.indexOf("Secretario");
        var nint = commission_string.indexOf("Integrante");

        if(npres != -1){
          var post = "Presidente";
        }else {
          var post = "Secretario";
        }

        var pick_state = state;

        switch (pick_state) {
            case "Aguascalientes":
                var pick_state = "agc";
                break;
            case "N/A":
                var class_state_none = "none";
                break;
            case "Nuevo Le&#xF3;n":
                var pick_state = "nl";
                break;
            case "M&#xE9;xico":
                var pick_state = "cdmx";
                break;
            case "Quer&#xE9;taro":
                var pick_state = "queretaro";
                break;
            case "Distrito Federal":
                var pick_state = "df";
                break;
            case "Quintana Roo":
                var pick_state = "qr";
                break;
            case "Michoac&#xE1;n":
                var pick_state = "michoacan";
                break;
            case "Yucat&#xE1;n":
                var pick_state = "yucatan";
                break;
            case "Baja California":
                var pick_state = "bc";
                break;
            case "Baja California Sur":
                var pick_state = "bcs";
                break;
            case "San Luis Potos&#xED;":
                var pick_state = "slp";
                break;
                default:
                pick_state = state.toLowerCase();
                class_state_none = "block";
        }

        var valor = val.legislator_party_sil;


          $("#depscontent").append('\
          <div style="background:#EEE; padding-top:30px;" layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
            <div flex-md="100" flex-gt-md="100" flex-gt-lg="100" flex-lg="100" flex-xl="100" class="flex-xl-100 flex-md-100 flex-lg-100 flex-gt-md-100 flex-gt-lg-100" >\
              <div id="content-cards"  layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                <div  flex-md="40" flex-gt-md="30" flex-gt-lg="50" flex-lg="50" flex-offset-xl="10" flex-xl="30" class="flex-xl-30 flex-offset-xl-10 flex-md-40 flex-lg-50 flex-gt-md-30 flex-gt-lg-50">\
                  <div layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                    <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                      <div  flex-md="100" flex-gt-md="100" flex-gt-lg="100" flex-lg="100" flex-xl="100" class="flex-xl-100 flex-md-100 flex-lg-100 flex-gt-md-100 flex-gt-lg-100">\
                        <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                          <div id="califichas-content-happy" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                              <a href="pac.bordepolitico.com" target="_blank">\
                                <img onmouseover="this.src=' + '\'imgs/svg/cali_happy_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/cali_happy.svg\'' + '" src="imgs/svg/cali_happy.svg"> </a>\
                          </div>\
                          <div id="califichas-content-happy" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                              <a href="pac.bordepolitico.com" target="_blank">\
                                <img onmouseover="this.src=' + '\'imgs/svg/cali_sad_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/cali_sad.svg\'' + '" src="imgs/svg/cali_sad.svg"> </a>\
                          </div>\
                          <div id="califichas-content-happy" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                              <a href="pac.bordepolitico.com" target="_blank">\
                                <img onmouseover="this.src=' + '\'imgs/svg/cali_bad_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/cali_bad.svg\'' + '" src="imgs/svg/cali_bad.svg"> </a>\
                          </div>\
                          <div ng-controller="OpenPerfilController" id="score-card" style="text-align:center;" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="ng-scope flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                            <img ng-click="openPerfilPage(item.id)" onmouseover="this.src=' + '\'imgs/svg/score_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/score.svg\'' + '" src="imgs/svg/score.svg">\
                              '+score_val+'\
                            </img>\
                          </div>\
                        </div>\
                        <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                          <div ng-controller="OpenPerfilController" id="image-card" flex-md="60" flex-gt-md="60" flex-gt-lg="60" flex-lg="60" flex-xl="60" class="ng-scope flex-xl-60 flex-md-60 flex-lg-60 flex-gt-md-60 flex-gt-lg-60">\
                            <img ng-click="openPerfilPage(item.id)" src="imgs/png/legisladores/'+res_pick+'.png" class="md-avatar">\
                          </div>\
                          <div id="image-party-card" flex-md="40" flex-gt-md="40" flex-gt-lg="40" flex-lg="20" flex-xl="40"  class="flex-xl-40 flex-md-40 flex-lg-40 flex-gt-md-40 flex-gt-lg-40">\
                            <img onmouseover="this.src=' + '\'imgs/svg/partys/colors/'+res_pick_party+'.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/partys/'+res_pick_party+'.svg\'' + '" src="imgs/svg/partys/'+res_pick_party+'.svg"> </a>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div style="text-align:right;" id="content-socials-card" hide show-xl  show-lg flex-xl="10" flex-lg="10" class="hide show-lg show-xl flex-xl-10 flex-lg-10">\
                  <div layout-xl="row" layout-lg="row" class="layout-xl-row layout-lg-row">\
                    <div layout-xl="column" layout-lg="column" class="layout-xl-column layout-lg-column">\
                      <div id="facebook-card">\
                        <a style="display:'+class_none_facebook+'" class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/'+facebook+'">\
                          <img onmouseover="this.src=\'imgs/svg/facebook_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/facebook_cards.svg\'" src="imgs/svg/facebook_cards.svg">\
                        </a>\
                      </div>\
                      <div layout-xl="column" id="twitter-card" class="layout-xl-column">\
                        <a style="display:'+class_none_twitter+'" href="https://twitter.com/'+twitter+'" target="_blank">\
                          <img onmouseover="this.src=\'imgs/svg/twiter_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/twiter_cards.svg\'" src="imgs/svg/twiter_cards.svg">\
                        </a>\
                      </div>\
                      <div layout-xl="column" id="mail-card" class="layout-xl-column">\
                        <a  style="display:'+class_none_mail+'" href="mailto:'+mail+'">\
                          <img onmouseover="this.src=\'imgs/svg/mail_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/mail_cards.svg\'" src="imgs/svg/mail_cards.svg">\
                        </a>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div flex-md="60" flex-gt-md="70" flex-gt-lg="50" flex-lg="50" flex-xl="50" class="flex-xl-50 flex-md-60 flex-lg-50 flex-gt-md-70 flex-gt-lg-50">\
                  <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                    <div flex-md="100" flex-gt-md="100" flex-gt-lg="100" flex-lg="100" flex-xl="100" class="flex-xl-100 flex-md-100 flex-lg-100 flex-gt-md-100 flex-gt-lg-100">\
                      <div ng-controller="OpenPanelScoreController" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-scope layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                        <div layout-xl="column" layout-lg="column" layout-gt-lg="column" layout-md="column" layout-gt-md="column" class="layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                          <div layout-xl="row" layout-lg="row" layout-md="row" layout-gt-md="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row">\
                            <div flex-xl="80" flex-lg="80" flex-gt-lg="80" flex-md="80" flex-gt-md="80" class="flex-xl-80 flex-md-80 flex-lg-80 flex-gt-md-80 flex-gt-lg-80">\
                              <div id="text-chamber-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                                '+chamber+'\
                              </div>\
                              <div id="text-state-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                                <span>  por: </span>\
                                '+state+'\
                              </div>\
                            </div>\
                            <div flex-xl="20" flex-lg="20" flex-gt-lg="20" flex-md="20" flex-gt-md="20" ng-mouseover="changeImageState=true" ng-mouseleave="changeImageState=false" ng-init="changeImageState=false" class="flex-xl-20 flex-md-20 flex-lg-20 flex-gt-md-20 flex-gt-lg-20">\
                              <img id="image-state-card" style="display:'+class_state_none+'" onmouseover="this.src=\'imgs/svg/states/colors/'+pick_state+'.svg\'" onmouseout="this.src=\'imgs/svg/states/'+pick_state+'.svg\'" src="imgs/svg/states/'+pick_state+'.svg">\
                            </div>\
                          </div>\
                          </div>\
                          <div ng-controller="OpenPerfilController" ng-click="openPerfilPage(item.id)" id="text-name-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-scope ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column" role="button" tabindex="0">\
                            '+name+'\
                          </div>\
                        <div id="text-election-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                          '+representation+'\
                        </div>\
                        <div  ng-controller="OpenPerfilController" ng-click="openPerfilPage(item.id)" id="text-commission-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-scope ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column" role="button" tabindex="0">\
                          '+post+'\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>');

          $("#depscontentMobile").append('\
          <div layout-xs="column" layout-sm="column"  class="ng-scope layout-xs-column layout-sm-column">\
            <md-list role="list">\
              <div id="content-cards" layout-xs="column" layout-sm="column" class="layout-xs-column layout-sm-column">\
                <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                  <div flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                  </div>\
                  <div flex-xs="60" flex-sm="60" class="flex-xs-60 flex-sm-60">\
                      <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                        <div id="califichas-content-happy" flex-xs="25" flex-sm="25" class="flex-xs-25 flex-sm-25">\
                          <a href="pac.bordepolitico.com" target="_blank">\
                            <img src="imgs/svg/cali_happy.svg">\
                          </a>\
                        </div>\
                        <div id="califichas-content-sad" flex-xs="25" flex-sm="25" class="flex-xs-25 flex-sm-25">\
                          <a href="pac.bordepolitico.com" target="_blank">\
                            <img src="imgs/svg/cali_sad.svg">\
                          </a>\
                        </div>\
                        <div id="califichas-content-bad" flex-xs="25" flex-sm="25" class="flex-xs-25 flex-sm-25">\
                          <a href="pac.bordepolitico.com" target="_blank">\
                            <img src="imgs/svg/cali_bad.svg">\
                          </a>\
                        </div>\
                        <div ng-controller="OpenPerfilController" id="score-card" style="text-align:center;" flex-xs="25" flex-sm="25" class="ng-scope flex-xs-25 flex-sm-25">\
                          <img ng-click="openPerfilPage(item.id)" src="imgs/svg/score.svg" role="button" tabindex="0">\
                            '+score_val+'</img>\
                        </div>\
                      </div>\
                  </div>\
                  <div flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                 </div>\
                </div>\
              </div>\
              <div style="margin-top:-160px;" layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                <div flex-xs="15" flex-sm="15" class="flex-xs-15 flex-sm-15">\
                </div>\
                <div flex-xs="70" flex-sm="70" class="flex-xs-70 flex-sm-70">\
                  <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                    <div ng-controller="OpenPerfilController" id="image-card" flex-xs="60" flex-sm="60" class="ng-scope flex-xs-60 flex-sm-60">\
                      <img ng-click="openPerfilPage(item.id)" src="imgs/png/legisladores/'+res_pick+'.png" class="md-avatar">\
                    </div>\
                    <div id="image-party-card" flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                      <img onmouseover="this.src=' + '\'imgs/svg/partys/colors/'+res_pick_party+'.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/partys/'+res_pick_party+'.svg\'' + '" src="imgs/svg/partys/'+res_pick_party+'.svg"> </a>\
                    </div>\
                    <div id="content-socials-card" flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                      <div style="text-align:right;" layout-xs="column" layout-sm="column" class="layout-xs-column layout-sm-column">\
                        <div id="facebook-card">\
                          <a style="display:'+class_none_facebook+'" class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/'+facebook+'">\
                            <img onmouseover="this.src=\'imgs/svg/facebook_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/facebook_cards.svg\'" src="imgs/svg/facebook_cards.svg">\
                          </a>\
                        </div>\
                        <div id="twitter-card">\
                          <a style="display:'+class_none_twitter+'" href="https://twitter.com/'+twitter+'" target="_blank">\
                            <img onmouseover="this.src=\'imgs/svg/twiter_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/twiter_cards.svg\'" src="imgs/svg/twiter_cards.svg">\
                          </a>\
                        </div>\
                        <div id="mail-card">\
                          <a  style="display:'+class_none_mail+'" href="mailto:'+mail+'">\
                            <img onmouseover="this.src=\'imgs/svg/mail_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/mail_cards.svg\'" src="imgs/svg/mail_cards.svg">\
                          </a>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div flex-xs="15" flex-sm="15" class="flex-xs-15 flex-sm-15">\
                </div>\
              </div>\
              <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                <div ng-controller="OpenPanelScoreController" flex-offset-xs="15" flex-xs="70" flex-offset-sm="15" flex-sm="70" class="ng-scope flex-xs-70 flex-sm-70 flex-offset-xs-15 flex-offset-sm-15">\
                  <div layout-xs="column" layout-sm="column" class="layout-xs-column layout-sm-column">\
                    <div id="text-chamber-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column">\
                    '+chamber+'\
                    </div>\
                    <div id="text-state-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column">\
                    <span>  por: </span>\
                    '+state+'\
                    <!-- <img id="image-state-card" src="{{item.img_state}}"> -->\
                    </div>\
                    <div id="text-name-card" ng-click="openPerfil(item.id)" layout-xs="column" layout-sm="column" role="button" tabindex="0" class="layout-xs-column layout-sm-column">\
                      '+name+'\
                    </div>\
                    <div id="text-election-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column">\
                    '+representation+'\
                    </div>\
                    <div ng-click="openPerfil(item.id)" id="text-commission-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column" role="button" tabindex="0">\
                    '+post+'\
                  </div>\
                </div>\
                <div flex-xs="15" flex-sm="15" class="flex-xs-15 flex-sm-15">\
                  <img id="image-state-card" style="display:'+class_state_none+'" onmouseover="this.src=\'imgs/svg/states/colors/'+pick_state+'.svg\'" onmouseout="this.src=\'imgs/svg/states/'+pick_state+'.svg\'" src="imgs/svg/states/'+pick_state+'.svg">\
                </div>\
              </div>\
            </md-list>\
          </div>');
      }
  });

  $.ajax({
    url: supurl+'/diputados/basic/sen/get',
    method: "POST",
    data: {legislator_chamber_sil:"senador"},
    dataType: "json"
  }).done(function(data) {
    subject=data.dip;
    console.log(subject);
    nuevoarray = [];
    for (var i = 0; i < subject.length; i++) {
        val=subject[i];

        var pick_party = val.legislator_party_sil;
        var res_pick_party = pick_party.toLowerCase();

        var pick_legis = val.legislator_image_sil;
        var res_pick = pick_legis.slice(16, -4);

        var facebook = val.legislator_facebook_sil;

          if(facebook == "FACEBOOK"){
            var class_none_facebook = "none";
          }else{
            var class_none_facebook = "block";
          }

        var twitter = val.legislator_twitter_senate;

          if(twitter == ""){
            var class_none_twitter = "none";
          }else{
            var class_none_twitter = "block";
          }

        var mail = val.legislator_mail_sil;

          if(mail == ""){
            var class_none_mail = "none";
          }else{
            var class_none_mail = "block";
          }

          if(val.legislator_gender_senate == "Masculino"){
              var chamber = "Diputado";
          }

          if(val.legislator_gender_senate == "Femenino"){
              var chamber = "Diputada";
          }

        var state = val.legislator_state_sil;


        var score = val.legislator_score_sil;

          if(score == 100 ){
            var score_val = "<p ng-click='openPerfilPage(item.id)'>"+score+"</p>";
          }else if(score < 100 && score  > 20){
            var score_val = "<span ng-click='openPerfilPage(item.id)'>"+score+"</span>";
          }else if(score  < 20 && score  > 10){
            var score_val = "<span class='menorVeinte' ng-click='openPerfilPage(item.id)'>"+score+"</span>";
          }else if(score  < 10){
            var score_val = "<span class='menorDiez' ng-click='openPerfilPage(item.id)'>"+score+"</span>";
          }


        var name = val.legislator_name_sil;

        var representation = val.legislator_election_sil;

          if(representation == "RP" ){
            representation = "Representación Proporcional"
          }

          if(representation == "MR"){
            representation = "Mayoria Relativa"
          }

          if(representation == "PM"){
            representation = "Representación Proporcional"
          }

        var post_commision = val.legislator_commission_sil;



        var commission_string  = JSON.stringify(post_commision);

        var npres = commission_string.indexOf("Presidente");
        var nsec = commission_string.indexOf("Secretario");
        var nint = commission_string.indexOf("Integrante");

        if(npres != -1){
          var post = "Presidente";
        }else {
          var post = "Secretario";
        }

        var pick_state = state;

        switch (pick_state) {
            case "Aguascalientes":
                var pick_state = "agc";
                break;
            case "N/A":
                var class_state_none = "none";
                break;
            case "Nuevo Le&#xF3;n":
                var pick_state = "nl";
                break;
            case "M&#xE9;xico":
                var pick_state = "cdmx";
                break;
            case "Quer&#xE9;taro":
                var pick_state = "queretaro";
                break;
            case "Distrito Federal":
                var pick_state = "df";
                break;
            case "Quintana Roo":
                var pick_state = "qr";
                break;
            case "Michoac&#xE1;n":
                var pick_state = "michoacan";
                break;
            case "Yucat&#xE1;n":
                var pick_state = "yucatan";
                break;
            case "Baja California":
                var pick_state = "bc";
                break;
            case "Baja California Sur":
                var pick_state = "bcs";
                break;
            case "San Luis Potos&#xED;":
                var pick_state = "slp";
                break;
                default:
                pick_state = state.toLowerCase();
                class_state_none = "block";
        }

        var valor = val.legislator_party_sil;

          $("#senatorscontent").append('\
          <div style="background:#EEE; padding-top:30px;" layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
            <div flex-md="100" flex-gt-md="100" flex-gt-lg="100" flex-lg="100" flex-xl="100" class="flex-xl-100 flex-md-100 flex-lg-100 flex-gt-md-100 flex-gt-lg-100" >\
              <div id="content-cards"  layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                <div  flex-md="40" flex-gt-md="30" flex-gt-lg="50" flex-lg="50" flex-offset-xl="10" flex-xl="30" class="flex-xl-30 flex-offset-xl-10 flex-md-40 flex-lg-50 flex-gt-md-30 flex-gt-lg-50">\
                  <div layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                    <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                      <div  flex-md="100" flex-gt-md="100" flex-gt-lg="100" flex-lg="100" flex-xl="100" class="flex-xl-100 flex-md-100 flex-lg-100 flex-gt-md-100 flex-gt-lg-100">\
                        <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                          <div id="califichas-content-happy" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                              <a href="pac.bordepolitico.com" target="_blank">\
                                <img onmouseover="this.src=' + '\'imgs/svg/cali_happy_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/cali_happy.svg\'' + '" src="imgs/svg/cali_happy.svg"> </a>\
                          </div>\
                          <div id="califichas-content-happy" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                              <a href="pac.bordepolitico.com" target="_blank">\
                                <img onmouseover="this.src=' + '\'imgs/svg/cali_sad_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/cali_sad.svg\'' + '" src="imgs/svg/cali_sad.svg"> </a>\
                          </div>\
                          <div id="califichas-content-happy" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                              <a href="pac.bordepolitico.com" target="_blank">\
                                <img onmouseover="this.src=' + '\'imgs/svg/cali_bad_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/cali_bad.svg\'' + '" src="imgs/svg/cali_bad.svg"> </a>\
                          </div>\
                          <div ng-controller="OpenPerfilController" id="score-card" style="text-align:center;" flex-md="25" flex-gt-md="25" flex-gt-lg="25" flex-lg="25" flex-xl="25" class="ng-scope flex-xl-25 flex-md-25 flex-lg-25 flex-gt-md-25 flex-gt-lg-25">\
                            <img ng-click="openPerfilPage(item.id)" onmouseover="this.src=' + '\'imgs/svg/score_color.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/score.svg\'' + '" src="imgs/svg/score.svg">\
                              '+score_val+'\
                            </img>\
                          </div>\
                        </div>\
                        <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                          <div ng-controller="OpenPerfilController" id="image-card" flex-md="60" flex-gt-md="60" flex-gt-lg="60" flex-lg="60" flex-xl="60" class="ng-scope flex-xl-60 flex-md-60 flex-lg-60 flex-gt-md-60 flex-gt-lg-60">\
                            <img ng-click="openPerfilPage(item.id)" src="imgs/png/legisladores/'+res_pick+'.png" class="md-avatar">\
                          </div>\
                          <div id="image-party-card" flex-md="40" flex-gt-md="40" flex-gt-lg="40" flex-lg="20" flex-xl="40"  class="flex-xl-40 flex-md-40 flex-lg-40 flex-gt-md-40 flex-gt-lg-40">\
                            <img onmouseover="this.src=' + '\'imgs/svg/partys/colors/'+res_pick_party+'.svg\'' + '" onmouseout="this.src=' + '\'imgs/svg/partys/'+res_pick_party+'.svg\'' + '" src="imgs/svg/partys/'+res_pick_party+'.svg"> </a>\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div style="text-align:right;" id="content-socials-card" hide show-xl  show-lg flex-xl="10" flex-lg="10" class="hide show-lg show-xl flex-xl-10 flex-lg-10">\
                  <div layout-xl="row" layout-lg="row" class="layout-xl-row layout-lg-row">\
                    <div layout-xl="column" layout-lg="column" class="layout-xl-column layout-lg-column">\
                      <div id="facebook-card">\
                        <a style="display:'+class_none_facebook+'" class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/'+facebook+'">\
                          <img onmouseover="this.src=\'imgs/svg/facebook_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/facebook_cards.svg\'" src="imgs/svg/facebook_cards.svg">\
                        </a>\
                      </div>\
                      <div layout-xl="column" id="twitter-card" class="layout-xl-column">\
                        <a style="display:'+class_none_twitter+'" href="https://twitter.com/'+twitter+'" target="_blank">\
                          <img onmouseover="this.src=\'imgs/svg/twiter_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/twiter_cards.svg\'" src="imgs/svg/twiter_cards.svg">\
                        </a>\
                      </div>\
                      <div layout-xl="column" id="mail-card" class="layout-xl-column">\
                        <a  style="display:'+class_none_mail+'" href="mailto:'+mail+'">\
                          <img onmouseover="this.src=\'imgs/svg/mail_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/mail_cards.svg\'" src="imgs/svg/mail_cards.svg">\
                        </a>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div flex-md="60" flex-gt-md="70" flex-gt-lg="50" flex-lg="50" flex-xl="50" class="flex-xl-50 flex-md-60 flex-lg-50 flex-gt-md-70 flex-gt-lg-50">\
                  <div layout-md="row" layout-gt-md="row" layout-gt-lg="row" layout-lg="row" layout-xl="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row layout-gt-lg-row">\
                    <div flex-md="100" flex-gt-md="100" flex-gt-lg="100" flex-lg="100" flex-xl="100" class="flex-xl-100 flex-md-100 flex-lg-100 flex-gt-md-100 flex-gt-lg-100">\
                      <div ng-controller="OpenPanelScoreController" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-scope layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                        <div layout-xl="column" layout-lg="column" layout-gt-lg="column" layout-md="column" layout-gt-md="column" class="layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                          <div layout-xl="row" layout-lg="row" layout-md="row" layout-gt-md="row" class="layout-xl-row layout-md-row layout-lg-row layout-gt-md-row">\
                            <div flex-xl="80" flex-lg="80" flex-gt-lg="80" flex-md="80" flex-gt-md="80" class="flex-xl-80 flex-md-80 flex-lg-80 flex-gt-md-80 flex-gt-lg-80">\
                              <div id="text-chamber-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                                '+chamber+'\
                              </div>\
                              <div id="text-state-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                              <span>  por: </span>\
                                '+state+'\
                              </div>\
                            </div>\
                            <div flex-xl="20" flex-lg="20" flex-gt-lg="20" flex-md="20" flex-gt-md="20" ng-mouseover="changeImageState=true" ng-mouseleave="changeImageState=false" ng-init="changeImageState=false" class="flex-xl-20 flex-md-20 flex-lg-20 flex-gt-md-20 flex-gt-lg-20">\
                              <img id="image-state-card"  onmouseover="this.src=\'imgs/svg/states/colors/'+pick_state+'.svg\'" onmouseout="this.src=\'imgs/svg/states/'+pick_state+'.svg\'" src="imgs/svg/states/'+pick_state+'.svg">\
                            </div>\
                          </div>\
                          </div>\
                          <div ng-controller="OpenPerfilController" ng-click="openPerfilPage(item.id)" id="text-name-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-scope ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column" role="button" tabindex="0">\
                            '+name+'\
                          </div>\
                        <div id="text-election-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column">\
                            '+representation+'\
                        </div>\
                        <div ng-controller="OpenPerfilController" ng-click="openPerfilPage(item.id)" id="text-commission-card" layout-md="column" layout-gt-md="column" layout-gt-lg="column" layout-lg="column" layout-xl="column" class="ng-scope ng-binding layout-xl-column layout-md-column layout-lg-column layout-gt-md-column layout-gt-lg-column" role="button" tabindex="0">\
                            '+post+'\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>');

          $("#senatorscontentMobile").append('\
          <div layout-xs="column" layout-sm="column"  class="ng-scope layout-xs-column layout-sm-column">\
            <md-list role="list">\
              <div id="content-cards" layout-xs="column" layout-sm="column" class="layout-xs-column layout-sm-column">\
                <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                  <div flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                  </div>\
                  <div flex-xs="60" flex-sm="60" class="flex-xs-60 flex-sm-60">\
                      <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                        <div id="califichas-content-happy" flex-xs="25" flex-sm="25" class="flex-xs-25 flex-sm-25">\
                          <a href="pac.bordepolitico.com" target="_blank">\
                            <img src="imgs/svg/cali_happy.svg">\
                          </a>\
                        </div>\
                        <div id="califichas-content-sad" flex-xs="25" flex-sm="25" class="flex-xs-25 flex-sm-25">\
                          <a href="pac.bordepolitico.com" target="_blank">\
                            <img src="imgs/svg/cali_sad.svg">\
                          </a>\
                        </div>\
                        <div id="califichas-content-bad" flex-xs="25" flex-sm="25" class="flex-xs-25 flex-sm-25">\
                          <a href="pac.bordepolitico.com" target="_blank">\
                            <img src="imgs/svg/cali_bad.svg">\
                          </a>\
                        </div>\
                        <div ng-controller="OpenPerfilController" id="score-card" style="text-align:center;" flex-xs="25" flex-sm="25" class="ng-scope flex-xs-25 flex-sm-25">\
                          <img ng-click="openPerfilPage(item.id)" src="imgs/svg/score.svg" role="button" tabindex="0">\
                            '+score_val+'</img>\
                        </div>\
                      </div>\
                  </div>\
                  <div flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                 </div>\
                </div>\
              </div>\
              <div style="margin-top:-160px;" layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                <div flex-xs="15" flex-sm="15" class="flex-xs-15 flex-sm-15">\
                </div>\
                <div flex-xs="70" flex-sm="70" class="flex-xs-70 flex-sm-70">\
                  <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                    <div ng-controller="OpenPerfilController" id="image-card" flex-xs="60" flex-sm="60" class="ng-scope flex-xs-60 flex-sm-60">\
                      <img ng-click="openPerfilPage(item.id)" src="imgs/png/legisladores/'+res_pick+'.png" class="md-avatar">\
                    </div>\
                    <div id="image-party-card" flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                        <img src="imgs/svg/partys/pri.svg">\
                    </div>\
                    <div id="content-socials-card" flex-xs="20" flex-sm="20" class="flex-xs-20 flex-sm-20">\
                      <div style="text-align:right;" layout-xs="column" layout-sm="column" class="layout-xs-column layout-sm-column">\
                        <div id="facebook-card">\
                          <a style="display:'+class_none_facebook+'" class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/'+facebook+'">\
                            <img onmouseover="this.src=\'imgs/svg/facebook_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/facebook_cards.svg\'" src="imgs/svg/facebook_cards.svg">\
                          </a>\
                        </div>\
                        <div id="twitter-card">\
                          <a style="display:'+class_none_twitter+'" href="https://twitter.com/'+twitter+'" target="_blank">\
                            <img onmouseover="this.src=\'imgs/svg/twiter_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/twiter_cards.svg\'" src="imgs/svg/twiter_cards.svg">\
                          </a>\
                        </div>\
                        <div id="mail-card">\
                          <a  style="display:'+class_none_mail+'" href="mailto:'+mail+'">\
                            <img onmouseover="this.src=\'imgs/svg/mail_cards_color.svg\'" onmouseout="this.src=\'imgs/svg/mail_cards.svg\'" src="imgs/svg/mail_cards.svg">\
                          </a>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div flex-xs="15" flex-sm="15" class="flex-xs-15 flex-sm-15">\
                </div>\
              </div>\
              <div layout-xs="row" layout-sm="row" class="layout-xs-row layout-sm-row">\
                <div ng-controller="OpenPanelScoreController" flex-offset-xs="15" flex-xs="70" flex-offset-sm="15" flex-sm="70" class="ng-scope flex-xs-70 flex-sm-70 flex-offset-xs-15 flex-offset-sm-15">\
                  <div layout-xs="column" layout-sm="column" class="layout-xs-column layout-sm-column">\
                    <div id="text-chamber-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column">\
                    '+chamber+'\
                    </div>\
                    <div id="text-state-card" style="display:'+class_state_none+'" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column">\
                    <span>  por: </span>\
                    '+state+'\
                    </div>\
                    <div id="text-name-card" ng-click="openPerfil(item.id)" layout-xs="column" layout-sm="column" role="button" tabindex="0" class="layout-xs-column layout-sm-column">\
                      '+name+'\
                    </div>\
                    <div id="text-election-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column">\
                    '+representation+'\
                    </div>\
                    <div ng-click="openPerfil(item.id)" id="text-commission-card" layout-xs="column" layout-sm="column" class="ng-binding layout-xs-column layout-sm-column" role="button" tabindex="0">\
                    '+post+'\
                  </div>\
                </div>\
                <div flex-xs="15" flex-sm="15" class="flex-xs-15 flex-sm-15">\
                <img id="image-state-card-sen" style="display:'+class_state_none+'" onmouseover="this.src=\'imgs/svg/states/colors/'+pick_state+'.svg\'" onmouseout="this.src=\'imgs/svg/states/'+pick_state+'.svg\'" src="imgs/svg/states/'+pick_state+'.svg">\
                </div>\
              </div>\
            </md-list>\
          </div>');
      }
  });
