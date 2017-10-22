(function() {
  'use strict';

  angular
    .module('ohax')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log) {
    var vm = this;
    var hidemF;
    var derpF;
    var schol;
    var carS;
    var dentalS;
    var fams = 1;


    $scope.derpF = false
    $scope.hidemF = false
    $scope.carS = false
    $scope.dentalS = false
    $scope.schol = false
    $scope.doctor =0
    $scope.rentmortgage = 0
    $scope.phonebill = 0
    $scope.gasbill = 0
    $scope.electricbill = 0
    $scope.waterbill = 0
    $scope.payment = 0
    $scope.gasoil = 0
    $scope.insurance = 0
    $scope.repairs = 0
    $scope.doctor= 0
    $scope.medicines = 0
    $scope.hospital=  0
    $scope.linsurance = 0
    $scope.minsurance= 0
    $scope.total = 0
    $scope.nums = 0
    $scope.contentNums = 0
    $scope.getHouseMonthlyCosts =0
    $scope.totalIncome = 0
    $scope.netemployment = 0
    $scope.ssd = 0
    $scope.ssi = 0
    $scope.adc = 0
    $scope.foodstamps = 0
    $scope.other = 0
    $scope.show = function(){
       $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
    }

    $scope.derp = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.derpF = derpF == true ? derpF = false : derpF = true
    }
    $scope.scholShow = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.schol = schol == true ? schol = false : schol = true
    }
    $scope.carShow = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.carS = carS == true ? carS = false : carS = true
    }
    $scope.dentalShow = function(){
        $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.dentalS = dentalS == true ? dentalS = false : dentalS = true
    }
    // create new HTML elements with angular
    $scope.getHouseMonthlyCosts = function(){
        // $log.log('ass')
        // $scope.total = 0;

        $scope.total = parseInt($scope.doctor)  +  parseInt($scope.rentmortgage )+ parseInt($scope.phonebill) + parseInt($scope.gasbill) + parseInt($scope.electricbill) + parseInt($scope.waterbill)
         + parseInt($scope.payment) + parseInt($scope.gasoil) + parseInt($scope.insurance)+ parseInt($scope.repairs) + parseInt($scope.doctor) +   parseInt($scope.medicines )
         + parseInt($scope.hospital) + parseInt($scope.linsurance) + parseInt($scope.minsurance);
         if($scope.total === NaN) {
             $scope.total = "Please input all values.";
         }



        //  $scope.totalarr = parseInt($scope.doctor),  parseInt($scope.rentmortgage ), parseInt($scope.phonebill), parseInt($scope.gasbill), parseInt($scope.electricbill), parseInt($scope.waterbill),
        //  parseInt($scope.payment), parseInt($scope.gasoil), parseInt($scope.insurance), parseInt($scope.repairs), parseInt($scope.doctor),   parseInt($scope.medicines ),
        //  parseInt($scope.hospital), parseInt($scope.linsurance), parseInt($scope.minsurance);
        //  for(var i = 0; i < $scope.total.length; i++) {
        //      $log.log("FUCK")
        //      if($scope.totalarr[i] == undefined || $scope.totalarr[i] == null) {
        //          $scope.totalarr[i] = 0;
        //      }
        //  }

    }

    $scope.getMonthlyIncome = function(){
        $scope.totalIncome = parseInt($scope.netemployment) + parseInt($scope.ssd) + parseInt($scope.ssi) + parseInt($scope.adc) + parseInt($scope.foodstamps) + parseInt($scope.other);
    }

    $scope.radioChecked = function ()
      {

          $scope.infoPlaceholder = "Patient's Info"
          $scope.spousePlaceholder = "Spouse's Info";
          $scope.lNamePlaceholder="Last Name";
          $scope.fNamePlaceholder="First Name";
          $scope.mNamePlaceholder="Middle Name";
          $scope.dobPlaceholder="Date of Birth";
          $scope.addressPlaceholder="Mailing Address";
          $scope.lengthPlaceholder="How Long";
          $scope.phonePlaceholder="Phone Number";
          $scope.cityPlaceholder="City";
          $scope.statePlaceholder="State";
          $scope.zipPlaceholder="Zip";
          $scope.fmembersPlaceholder="Family Members";
          $scope.relationshipPlaceholder="Relationship";
          $scope.employedPlaceholder="Employed By";
          $scope.studentPlaceholder="Student";
          $scope.llPlaceholder="Landlord";
          $scope.lhPlaceholder="Leinholder";
          $scope.mhePlaceholder="Monthly Household Expenses";
          $scope.rmPlaceholder="Rent/Mortgage";
          $scope.utilPlaceholder="Utilities";
          $scope.phoneBillPlaceholder="Phone Bill";
          $scope.gasBillPlaceholder="Gas Bill";
          $scope.electricBillPlaceholder="Electric Bill";
          $scope.waterBillPlaceholder="Water Bill";
          $scope.autoPlaceholder="Auto";
          $scope.paymentPlaceholder="Payment";
          $scope.gasOilPlaceholder="Gas & Oil";
          $scope.insurPlaceholder="Insurance";
          $scope.repairPlaceholder="Repairs";
          $scope.medicalPlaceholder="Medical";
          $scope.doctorPlaceholder="Doctor";
          $scope.hospitalPlaceholder="Hospital";
          $scope.medicinePlaceholder="Medicines";
          $scope.insurancePlaceholder="Insurance";
          $scope.lifeInsurancePlaceholder="Life Insurance";
          $scope.medicalInsurancePlaceholder="Medical Insurance";
          $scope.totalPlaceholder="Total:";
          $scope.mpiPlaceholder="Monthly Patient Income";
          $scope.msiPlaceholder="Monthly Spouse Income";
          $scope.moiPlaceholder="Monthly Other Income";
          $scope.mhiTextPlaceholder="Check if you have any source of household income from maily members not including your spouse";
          $scope.employmentNetPlaceholder="Employment (Net)";
          $scope.ssdPlaceholder="Social Security Disability";
          $scope.ssiPlaceholder="SSI";
          $scope.adcPlaceholder="ADC";
          $scope.foodStampsPlaceholder="Food Stamps";
          $scope.otherIncomePlaceholder="Other (type list then enter pricce on next line)";
          $scope.totalIncomePlaceholder="Total Amont of Income:";
          $scope.totalAssetsPlaceholder="Total Amount of Assets";
          $scope.cabalancePlaceholder="Checking Account Balance";
          $scope.sabalancePlaceholder="Savings Account Balance";
          $scope.homevaluePlaceholder="Home Assessed Value";
      }

      $scope.radiounChecked = function ()
      {
        $scope.infoPlaceholder = "Infomación de Patiente"
        $scope.spousePlaceholder = "Información de Esposo/a";
        $scope.lNamePlaceholder="Apellido del pacienta";
        $scope.fNamePlaceholder="Nombre";
        $scope.mNamePlaceholder="Segundo nombre";
        $scope.dobPlaceholder="Fecha de nacimiento";
        $scope.addressPlaceholder="Dirección";
        $scope.lengthPlaceholder="Por cuánto tiempo";
        $scope.phonePlaceholder="Número de teléfono";
        $scope.cityPlaceholder="Ciudad";
        $scope.statePlaceholder="Estado";
        $scope.zipPlaceholder="Código postal";
        $scope.fmembersPlaceholder="Lista de todas las personas que viven con usted";
        $scope.relationshipPlaceholder="Relación con usted";
        $scope.employedPlaceholder="Relación con usted Empleado por";
        $scope.studentPlaceholder="Estudiante";
        $scope.llPlaceholder="Renta";
        $scope.lhPlaceholder="Dueño";
        $scope.mhePlaceholder="Los Gastos Mensuales de la Casa";
        $scope.rmPlaceholder="Renta";
        $scope.utilPlaceholder="Servicios públicos";
        $scope.phoneBillPlaceholder="Teléfono";
        $scope.gasBillPlaceholder="Gas";
        $scope.electricBillPlaceholder="Electricidad";
        $scope.waterBillPlaceholder="Agua";
        $scope.autoPlaceholder="Automóvil";
        $scope.paymentPlaceholder="Pago Mensual";
        $scope.gasOilPlaceholder="Gasolino & Aceite";
        $scope.insurPlaceholder="Seguro";
        $scope.repairPlaceholder="Arreglos";
        $scope.medicalPlaceholder="Médico";
        $scope.doctorPlaceholder="Doctor";
        $scope.hospitalPlaceholder="Hospital";
        $scope.medicinePlaceholder="Medicina/recetas";
        $scope.insurancePlaceholder="Seguro";
        $scope.lifeInsurancePlaceholder="Vida";
        $scope.medicalInsurancePlaceholder="Médico";
        $scope.totalPlaceholder="Totalice de los gastos mensuales";
        $scope.mpiPlaceholder="Los Ingresos Mensuales del Paciente";
        $scope.msiPlaceholder="Los Ingresos Mensuales del Esposo/a";
        $scope.moiPlaceholder="Los Ingresos Mensuales de los Otros";
        $scope.mhiTextPlaceholder="Verifique si tiene alguna fuente de ingresos del hogar de los miembros de la familia sin incluir a su cónyuge";
        $scope.employmentNetPlaceholder="Empleo (después de los impuestos)";
        $scope.ssdPlaceholder="Seguro Social Desabilitado";
        $scope.ssiPlaceholder="SSI";
        $scope.adcPlaceholder="DES/TANF";
        $scope.foodStampsPlaceholder="Cupones de alimento";
        $scope.otherIncomePlaceholder="Otros gastos (lista)";
        $scope.totalIncomePlaceholder="Totalice los ingresos mensuales (suma las 3 columnas):";
        $scope.totalAssetsPlaceholder="Bienes";
        $scope.cabalancePlaceholder="Cuenta corriente";
        $scope.sabalancePlaceholder="Cuenta de ahorros";
        $scope.homevaluePlaceholder="Casa(valor)";
      }
  }
})();
