using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class Produto
    {
        [Key]
        [Display(Name = "Código do Produto")]
        public int IdPd { get; set;}
        [Display(Name = "Nome do Produto")]
        public string? NomeId { get; set;}
        [Display(Name = "Descrição do Produto")]
        public string? Descricao { get; set;}
        [Display(Name = "Quantidade de Produto")]
        public int Quantidade { get; set;}
        [Display(Name = "Preço do Produto")]
        public double Preco { get; set;}

        public List<Item>? Items { get; set;}
        [Display(Name = "Código da Marca")]
        public int IdM { get; set;}
        public Marca? Marca { get; set;}
    }
}