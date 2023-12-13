using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Vendedor
    {
        [Key]
        [Display(Name = "Código do Vendedor")]
        public int Idv { get; set;}
        [Display(Name = "Nome do Vendedor")]
        public string? Nome { get; set;}

        public List<NotaDeVenda>? NotaDeVendas { get; set;}
    }
}