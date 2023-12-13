using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Transportadora
    {
        [Key]
        [Display(Name = "Código da Transportadora")]
        public int Idt { get; set;}
        [Display(Name = "Nome da Transportadora")]
        public string? Nome { get; set;}

        public List<NotaDeVenda>? NotaDeVendas { get; set;}
    }
}