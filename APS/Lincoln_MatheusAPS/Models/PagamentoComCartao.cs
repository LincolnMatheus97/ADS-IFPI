using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lincoln_MatheusAPS.Models
{
    public class PagamentoComCartao : TipoDePagamento
    {
        public string? NumeroDoCartao { get; set;}
        public string? Bandeira { get; set;}
    }
}