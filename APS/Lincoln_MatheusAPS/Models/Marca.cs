using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Marca
    {
        [Key]
        [Display(Name = "Código da Marca")]
        public int IdM { get; set;}
        [Display(Name = "Nome da Marca")]
        public string? Nome { get; set;}
        [Display(Name = "Descrição da Marca")]
        public string? Descricao { get; set;}
        
        public List<Produto>? Produtos { get; set;}
        
    }
}