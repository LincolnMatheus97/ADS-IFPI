using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Pagamento 
    {
        
        [Key]
        [Display(Name = "Código de Pagamento")]
        public int Idp { get; set;}
        [Display(Name = "Data Limite de Pagamento")]
        public DateTime DataLimite { get; set;}
        [Display(Name = "Valor de Pagamento")]
        public double Valor { get; set;}
        [Display(Name = "Está Pago ?")]
        public bool Pago { get; set;}

        [Display(Name = "Código de Venda")]
        public int Id { get; set;}
        public NotaDeVenda? NotaDeVenda { get; set;}
    }
}