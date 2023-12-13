using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Cliente 
    {
        [Key]
        [Display(Name = "Código do Cliente")]
        public int ClienteId { get; set;}
        [Display(Name = "Nome do Cliente")]
        public string? Nome { get; set;}

        public List<NotaDeVenda>? NotaDeVendas { get; set;}
    }
}