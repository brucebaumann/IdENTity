var profilMap = new Map();
profilMap.set("tludik", 0);
profilMap.set("jbonet", 1);
profilMap.set("ldelrous", 2);
profilMap.set("Analyse",3);
var nom=sessionStorage.getItem("Profil");
nom=profilMap.get(nom);
  //var nom=1;
var pagevisitee=sessionStorage.getItem("Page");
var menace;
menace=localStorage.getItem("Menace");
console.log(menace);
  
var pagevisitee=sessionStorage.getItem("Page");
var listepage=" "+sessionStorage.getItem("Liste")+" "+pagevisitee+" en temps que "+sessionStorage.getItem("Profil");
sessionStorage.setItem("Liste",listepage);
  
if (nom==3){
    console.log("Le joueur a précédement visité les pages:"+listepage);
}
if (sessionStorage.getItem("End")=="True"){
    console.log("Le joueur a perdu, sa jauge de menace est pleine. Page ayant causé la défaite:"+pagevisitee);
    console.log("Le joueur a précédement visité les pages:"+listepage);
}
   
if (pagevisitee=="Reception"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/scout_template_interne.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/scout_template_interne.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==2){
        document.write('<img src="images/templates/nom_prenom3/scout_template_interne.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
}
if(pagevisitee=="Envoyes"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/scout_template_interne_envoyes.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==1){
        alert("Attention, ton activité semble surveillée!!");
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom2/scout_template_interne_envoyes.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==2){
        document.write('<img src="images/templates/nom_prenom3/scout_template_interne_envoyes.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
}
if(pagevisitee=="Corbeille"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/scout_template_interne_corbeille.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==1){
        alert("Attention, ton activité semble surveillée!!");
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom2/scout_template_interne_corbeille.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==2){
        document.write('<img src="images/templates/nom_prenom3/scout_template_interne_corbeille.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
  
}
if(pagevisitee=="Brouillons"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/scout_template_interne_brouillons.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==1){
        alert("Attention, ton activité semble surveillée!!");
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom2/scout_template_interne_brouillons.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
    if(nom==2){
        document.write('<img src="images/templates/nom_prenom3/scout_template_interne_brouillons.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;"usemap="#bureautmp"');
    }
}
if(pagevisitee=="ListesDiffusion"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_applications-listes_de_diff.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:287px;" usemap="#favoristmp"');
    }
    if(nom==1){
        alert("Attention, ton activité semble surveillée!!");
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom2/template_applications-listes_de_diff.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:287px;" usemap="#favoristmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_applications-listes_de_diff.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:287px;" usemap="#favoristmp"');
    }
}
if(pagevisitee=="MonDossier"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_monDoss-coord.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:720px;" usemap="#mondossiertmp"');		
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_monDoss-coord.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:720px;" usemap="#mondossiertmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_monDoss-coord.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:720px;	" usemap="#mondossiertmp"');
    }
}
if(pagevisitee=="Compte"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_monDoss-compte.png" alt="template" style="position:absolute;display:block;left:0px;top:0px;width:1028px;height:664px;" usemap="#mondossiertmp"');		
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_monDoss-compte.png" alt="template" style="position:absolute;width:1028px;height:664px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_monDoss-compte.png" alt="template" style="position:absolute;width:1028px;height:664px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
}
if(pagevisitee=="Examens"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_monDoss-examens.png" alt="template" style="position:absolute;width:1028px;height:1389px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_monDoss-examens.png" alt="template" style="position:absolute;width:1028px;height:1389px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_monDoss-examens.png" alt="template" style="position:absolute;width:1028px;height:1389px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
}
if(pagevisitee=="Infos"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_monDoss-infos.png" alt="template" style="position:absolute;width:1028px;height:823px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');		
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_monDoss-infos.png" alt="template" style="position:absolute;width:1028px;height:823px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_monDoss-infos.png" alt="template" style="position:absolute;width:1028px;height:823px;display:block;left:0x;top:0px;" usemap="#mondossiertmp"');
    }
}
if(pagevisitee=="Moyennes"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_monDoss-moyennes.png" alt="template" style="position:absolute;width:1028px;height:1006px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_monDoss-moyennes.png" alt="template" style="position:absolute;width:1028px;height:1006px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_monDoss-moyennes.png" alt="template" style="position:absolute;width:1028px;height:1006px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
}
if(pagevisitee=="Scolarite"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_monDoss-scolarite.png" alt="template" style="position:absolute;width:1028px;height:661px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');		
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_monDoss-scolarite.png" alt="template" style="position:absolute;width:1028px;height:661px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_monDoss-scolarite.png" alt="template" style="position:absolute;width:1028px;height:661px;display:block;left:0px;top:0px;" usemap="#mondossiertmp"');
    }
}
if(pagevisitee=="SeFormer"){
    if(nom==0){
        document.write('<img src="images/templates/nom_prenom1/template_se_former-moodle.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;" usemap="#seformertmp">');		
    }
    if(nom==1){
        document.write('<img src="images/templates/nom_prenom2/template_se_former-moodle.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;" usemap="#seformertmp">');
    }
    if(nom==2){
        menace=localStorage.getItem("Menace");
        menace=parseInt(menace);
        localStorage.removeItem("Menace");
        menace=menace+10;
        localStorage.setItem("Menace",menace);
        document.write('<img src="images/templates/nom_prenom3/template_se_former-moodle.png" alt="template" style="display:block;position:absolute;left:35px;top:215px;width:1028px;height:661px;" usemap="#seformertmp">');
    }
}